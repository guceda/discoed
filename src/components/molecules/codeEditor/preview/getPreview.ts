import { Parser } from 'node-sql-parser';
import { PreviewVisitor } from './visitor/PreviewVisitor';

const prepareSelection = (selection: string) => {
  return selection[selection.length - 1] === ','
    ? selection.slice(0, -1)
    : selection;
};

const getAST = (selection: string) => {
  const parser = new Parser();
  const formattedSelection = prepareSelection(selection);
  const ast = parser.astify(formattedSelection);
  return ast;
};

const getPreview = (selection: string) => {
  console.log('EXECUTING:', selection);
  const ast = getAST(selection);
  const result = PreviewVisitor.of().visitNode(ast);
  const columns = result.flat(Infinity);
  return columns;
};

export default getPreview;
