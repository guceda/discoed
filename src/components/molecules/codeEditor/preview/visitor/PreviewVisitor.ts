import { ColumnRef, Select } from '../definitions/node-sql-parser';
import Visitor from './Visitor';

export class PreviewVisitor extends Visitor {
  static of() {
    return new this();
  }

  selectVisit(node: Select) {
    return node.columns.map(
      (column) => column.as || this.visitNode(column.expr),
    );
  }

  // eslint-disable-next-line class-methods-use-this
  column_refVisit(node: ColumnRef) {
    return node.column;
  }
}
