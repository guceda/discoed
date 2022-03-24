// eslint-disable-next-line import/no-named-as-default
import Visitor from './Visitor';
import {
  AggrFunc,
  ColumnRef,
  Select,
  TableColumnAst,
} from '../definitions/node-sql-parser';

export class PreviewVisitor extends Visitor {
  static of() {
    return new this();
  }

  getColumns(columns: Select['columns']) {
    if (Array.isArray(columns)) {
      return columns.map((column) => {
        if (column.as)
          return {
            as: column.as,
            ...this.visitNode(column.expr),
          };
        return this.visitNode(column.expr);
      });
    }
    return columns;
  }

  selectVisit(node: Select) {
    return {
      columns: this.getColumns(node.columns),
      table: node.from?.map((from) => from.table),
      // where: node.where && this.visitNode(node.where),
    };
  }

  tableColumnAstVisit(node: TableColumnAst) {
    return {
      ...this.visitNode(node.ast),
      table: this.tablelistVisit(node.tableList),
    };
  }

  // eslint-disable-next-line class-methods-use-this
  binary_exprVisit(node: any) {
    return `${node.left.column} ${node.operator} ${node.right.column}`;
  }

  // eslint-disable-next-line class-methods-use-this
  tablelistVisit(node: TableColumnAst['tableList']) {
    return node[0].split('::')[2];
  }

  // eslint-disable-next-line class-methods-use-this
  column_refVisit(node: ColumnRef) {
    return { name: node.column };
  }

  // eslint-disable-next-line class-methods-use-this
  castVisit(node: any) {
    return { type: node.target.dataType };
  }

  // eslint-disable-next-line class-methods-use-this
  aggr_funcVisit(node: AggrFunc) {
    // eslint-disable-next-line no-useless-return
    return { type: node.name === 'COUNT' ? 'INT' : 'FLOAT' };
  }
}
