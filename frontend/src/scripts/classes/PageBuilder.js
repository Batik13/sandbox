import config from './../config';

export class PageBuilder {
  constructor(appNode = document.getElementById(config.appNodeId)) {
    this.appNode = appNode;
  }

  create(nodeList) {
    this.appNode.innerHTML = '';
    this.appNode.append(nodeList);
  }
}