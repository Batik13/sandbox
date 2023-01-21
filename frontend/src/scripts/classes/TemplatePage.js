import { Router } from "./Router";

export class TemplatePage {
  template = '';

  constructor() {
    this.init();
    return this.template;
  }

  init() {
    const layoutRoot = document.createElement('div');
    layoutRoot.classList = `container ${Router.getHash()}`;

    const layoutWrap = document.createElement('div');
    layoutWrap.classList = `container__wrap`;

    layoutRoot.append(layoutWrap);
    layoutWrap.append(this.create());

    this.template = layoutRoot;
  }

  create() {
    return document.createElement('div');
  }
}