import { TemplatePage } from "./TemplatePage";

export class PageList extends TemplatePage {
  create() {
    const tmp = document.createElement('div');
    tmp.innerHTML = 'List';

    return tmp;
  }
}