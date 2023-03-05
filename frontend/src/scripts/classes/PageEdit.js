import { PageTemplate } from "./PageTemplate";

export class PageEdit extends PageTemplate {
  create() {
    const tmp = document.createElement("div");
    tmp.innerHTML = "Edit";

    return tmp;
  }
}
