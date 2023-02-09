import { State } from './State';
import { CustomException } from './CustomException';
import { PageHome } from './PageHome';
import { PageEdit } from './PageEdit';
import { PageTrain } from './PageTrain';
import { PageBuilder } from './PageBuilder';
import { PageAdd } from './PageAdd';

export class Page {
  constructor(name) {
    this.name = name;
    this.init();
  }

  init() {
    if (State.stateList.includes(this.name)) {
      this.create(this.name)
    } else {
      CustomException.message(`Can't find such application state`);
    }
  }

  create() {
    const pageBuilder = new PageBuilder();

    if (this.name === 'home') {
      pageBuilder.create(new PageHome());
    }
    if (this.name === 'edit') {
      pageBuilder.create(new PageEdit());
    }
    if (this.name === 'add') {
      pageBuilder.create(new PageAdd());
    }
    if (this.name === 'train') {
      pageBuilder.create(new PageTrain());
    }
  }
}