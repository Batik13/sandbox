import { Page } from './Page';

export class State {
  static stateList = ['home', 'list', 'form', 'train'];

  constructor(observe) {
    this.set(observe.getHash());
  }

  set(state) {
    try {
      new Page(state);
    } catch (error) {
      console.error(error);
    }
  }
}