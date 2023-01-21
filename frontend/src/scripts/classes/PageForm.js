import { TemplatePage } from "./TemplatePage";

export class PageForm extends TemplatePage {
  create() {
    const tmp = document.createElement('div');
    tmp.innerHTML = 'Form';

    return tmp;
  }
}