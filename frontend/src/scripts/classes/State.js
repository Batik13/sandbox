import { Page } from './Page';

export class State {

  static stateList = ['home', 'list', 'form', 'train'];

  init() {
    this.set('home');
  }

  set(state) {
    try {
      new Page(state);
    } catch (error) {
      console.error(error);
    }
  }
}