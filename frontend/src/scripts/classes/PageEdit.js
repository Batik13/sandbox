import { TemplatePage } from "./TemplatePage";

export class PageEdit extends TemplatePage {
  create() {
    const tmp = document.createElement('div');
    tmp.innerHTML = 'Edit';

    return tmp;
  }
}