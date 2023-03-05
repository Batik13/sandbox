import { State } from "./State";
import { CustomException } from "./CustomException";
import { PageHome } from "./PageHome";
import { PageEdit } from "./PageEdit";
import { PageTrain } from "./PageTrain";
import { PageBuilder } from "./PageBuilder";
import { PageAdd } from "./PageAdd";

export class Page {
  constructor(name) {
    this.name = name;
    this.init();
  }

  init() {
    if (State.stateList.includes(this.name)) {
      this.create(this.name);
    } else {
      CustomException.message(`Can't find such application state`);
    }
  }

  create(pageName) {
    const pageBuilder = new PageBuilder();

    if (pageName === "home") {
      pageBuilder.create(new PageHome());
    }
    if (pageName === "edit") {
      pageBuilder.create(new PageEdit());
    }
    if (pageName === "add") {
      pageBuilder.create(new PageAdd());
    }
    if (pageName === "train") {
      pageBuilder.create(new PageTrain());
    }
  }
}
