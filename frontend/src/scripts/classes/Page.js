import config from './../config';

import { State } from './State';
import { CustomException } from './CustomException';
import { PageHome } from './PageHome';
import { PageList } from './PageList';
import { PageForm } from './PageForm';
import { PageTrain } from './PageTrain';
import { Template } from './Template';

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
    const template = new Template(document.getElementById(config.appNodeId));

    if (this.name === 'home') {
      template.create(new PageHome());
    }
    if (this.name === 'list') {
      template.create(new PageList());
    }
    if (this.name === 'form') {
      template.create(new PageForm());
    }
    if (this.name === 'train') {
      template.create(new PageTrain());
    }
  }
}