import { TemplatePage } from "./TemplatePage";

export class PageTrain extends TemplatePage {
  create() {
    const tmp = document.createElement('div');
    tmp.innerHTML = 'Train';

    return tmp;
  }
}