import { State } from './classes/State';
import { Observe } from './classes/Observe';

export class App {
  constructor(name) {
    this.name = name;
  }

  init() {
    (new State()).init();
    this.eventInitialization();
  }

  eventInitialization() {
    (new Observe).init();
  }
}