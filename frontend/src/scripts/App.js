import { State } from './classes/State';
import { Observe } from './classes/Observe';

export class App {
  constructor() {
    this.init();
  }

  init() {
    const observe = new Observe();
    new State(observe);
  }
}