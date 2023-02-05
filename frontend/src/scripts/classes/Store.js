export class Store {
  category = [];

  constructor() {
    this.category = localStorage.getItem('category');
  }

  getList() {
    return JSON.parse(this.category);
  }
}