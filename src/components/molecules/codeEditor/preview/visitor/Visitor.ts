export interface INode {
  type: string;
  [key: string]: any;
}

class Visitor {
  visitNode(node: INode | INode[]): any[] {
    return Array.isArray(node) ? this.visitAll(node) : this.visit(node);
  }

  // eslint-disable-next-line consistent-return
  private visit(node: INode): any {
    if (node.type) return (this as any)[`${node.type}Visit`](node);
    if (node.ast) return this.visit(node.ast);
  }

  private visitAll(nodes: INode[]) {
    return nodes.map((node) => (this as any)[`${node.type}Visit`](node));
  }
}

export default Visitor;
