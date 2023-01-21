export class Template {
  constructor(appNode) {
    this.appNode = appNode;
  }

  create(nodeList) {
    this.appNode.innerHTML = '';
    this.appNode.append(nodeList);
  }
}