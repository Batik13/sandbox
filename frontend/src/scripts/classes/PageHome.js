import { TemplatePage } from "./TemplatePage";

export class PageHome extends TemplatePage {
  create() {
    const tmp = document.createElement('div');
    tmp.innerHTML = 'Home';

    return tmp;
  }
}