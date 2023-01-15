import { State } from './State';
import { CustomException } from './CustomException';
import { PageHome } from './PageHome';
import { PageList } from './PageList';
import { PageForm } from './PageForm';
import { PageTrain } from './PageTrain';

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
    if (this.name === 'home') {
      new PageHome();
    }
    if (this.name === 'list') {
      new PageList();
    }
    if (this.name === 'form') {
      new PageForm();
    }
    if (this.name === 'train') {
      new PageTrain();
    }
  }
}