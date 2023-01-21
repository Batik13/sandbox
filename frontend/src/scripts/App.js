import { State } from './classes/State';

export class App {
  constructor() {
    this.init();
  }

  init() {
    const state = new State();
    onhashchange = (event) => {
      state.update();
    };
  }
}