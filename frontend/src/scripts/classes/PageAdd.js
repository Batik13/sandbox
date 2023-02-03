import { TemplatePage } from "./TemplatePage";

export class PageAdd extends TemplatePage {
  create() {
    const tmp = document.createElement('div');
    tmp.innerHTML = 'Add';

    return tmp;
  }
}