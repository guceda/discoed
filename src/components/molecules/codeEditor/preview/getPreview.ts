import { Parser } from 'node-sql-parser';
import mockTables, { Metadata } from './mockdata/tables';
import { PreviewVisitor } from './visitor/PreviewVisitor';

interface Column {
  as?: string;
  name?: string;
  type?: string;
}

type ColumnEntry = Column | Result;
interface Result {
  columns: ColumnEntry[];
  table?: string;
}

interface ColumnPreview {
  as: string;
  name: string;
  type: string;
  table: string;
}

type Preview = ColumnPreview[];

const getAllMetaFromTable = (table: string): Metadata => {
  return (mockTables as any)[table]?.metadata || [];
};

const prepare = (res: Result, result = [] as Preview): Preview => {
  const { columns, table } = res;

  if (table) {
    result.forEach((col, idx) => {
      // eslint-disable-next-line no-param-reassign
      if (!col.table) result[idx].table = table;
    });
  }

  columns.forEach((col: ColumnEntry) => {
    if ((col as Column).name || (col as Column).as) {
      result.push({ ...col, table } as ColumnPreview);
    } else {
      prepare(col as Result, result);
    }
  });
  return result;
};

const indexOfAll = <T>(arr: T[], fn: (el: T) => boolean): number[] =>
  arr.reduce((acc, el, i) => (fn(el) ? [...acc, i] : acc), [] as number[]);

const complete = (columns: Preview): Preview => {
  const filterFn = (col: ColumnPreview) => col.name === '*';
  const targetIdx = indexOfAll<ColumnPreview>(columns, filterFn);
  if (targetIdx.length) {
    const result = columns.map((x) => ({ ...x }));
    targetIdx.forEach((idx) => {
      const curr = result[idx];
      const metadata = getAllMetaFromTable(curr.table);
      const cols = metadata.map(
        (m) => ({ name: m.label, table: curr.table } as ColumnPreview),
      );

      result.splice(idx, 1, ...cols);
    });
    return result;
  }
  return columns;
};

const withTypes = (columns: Preview): Preview => {
  return columns.map((col) => {
    const metadata = () => getAllMetaFromTable(col.table);
    return {
      ...col,
      type: col.type
        ? col.type.toLowerCase()
        : (metadata().find((m) => m.label === col.name) as any).type,
    };
  });
};

const stringify = (columns: Preview) => {
  return columns.map((col) => `${col.as || col.name}(${col.type})`).join(', ');
};

const prepareSelection = (selection: string) => {
  return selection[selection.length - 1] === ','
    ? selection.slice(0, -1)
    : selection;
};

const getAST = (selection: string) => {
  const parser = new Parser();
  const formattedSelection = prepareSelection(selection);
  const { tableList, columnList, ast } = parser.parse(formattedSelection);
  return { tableList, columnList, ast };
};

const getPreview = (selection: string) => {
  const { ast } = getAST(selection);
  try {
    const result = PreviewVisitor.of().visitNode(ast) as unknown as Result;
    const prepared = prepare(result);
    const completed = complete(prepared);
    const typed = withTypes(completed);
    const string = stringify(typed);
    return string;
  } catch (err) {
    return 'Upps, cannot preview';
  }
};

export default getPreview;
