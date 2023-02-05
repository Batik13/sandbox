import { Router } from "./Router";

export class TemplatePage {
  template = '';

  constructor() {
    this.init();
    return this.template;
  }

  init() {
    const layoutRoot = document.createElement('div');
    layoutRoot.classList = `page__container container-fluid ${Router.getHash()}`;
    layoutRoot.append(this.create());
    this.template = layoutRoot;
  }

  create() {
    return document.createElement('div');
  }
}