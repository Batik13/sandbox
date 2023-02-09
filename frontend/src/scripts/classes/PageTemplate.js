import config from './../config';
import { Router } from "./Router";

export class PageTemplate {
  app = document.getElementById(config.appNodeId);
  template = '';
  form = '';

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

  getDiv(config) {
    const element = document.createElement('div');
    config?.classList && (element.classList = config.classList);
    return element;
  }

  getInput(config) {
    const element = document.createElement('input');
    config?.classList && (element.classList = config.classList);
    config?.type && (element.type = config.type);
    config?.value && (element.value = config.value);
    config?.placeholder && (element.placeholder = config.placeholder);
    config?.required && (element.required = config.required);
    return element;
  }

  getLink(config) {
    const element = document.createElement('a');
    config?.classList && (element.classList = config.classList);
    config?.href && (element.href = config.href);
    config?.title && (element.title = config.title);
    config?.onclick && (element.onclick = config.onclick);
    return element;
  }

  getButton(config) {
    const element = document.createElement('button');
    config?.classList && (element.classList = config.classList);
    config?.type && (element.type = config.type) || (element.type = 'button');
    config?.disabled && (element.disabled = config.disabled);
    config?.innerText && (element.innerText = config.innerText) || (element.innerText = 'Button');
    config?.onclick && (element.onclick = config.onclick);
    return element;
  }
}