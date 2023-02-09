import { PageTemplate } from "./PageTemplate";

export class PageTrain extends PageTemplate {
  create() {
    const tmp = document.createElement('div');
    tmp.innerHTML = 'Train';

    return tmp;
  }
}