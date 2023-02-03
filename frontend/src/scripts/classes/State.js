import { Page } from './Page';
import { Router } from './Router';

export class State {
  static stateList = ['home', 'add', 'edit', 'train'];

  constructor() {
    this.update();
  }

  update() {
    const hash = Router.getHash();
    if (hash) {
      this.set(hash)
    } else {
      Router.route('home')
    }
  }

  set(state) {
    try {
      new Page(state);
    } catch (error) {
      console.error(error);
    }
  }
}