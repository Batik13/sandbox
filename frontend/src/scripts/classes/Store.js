import { Router } from "./Router";

export class Store {
  category = [];

  constructor() {
    this.category = localStorage.getItem("category");
  }

  getCategoryList() {
    return JSON.parse(this.category);
  }

  getCategory(id) {
    return this.getCategoryList()[id];
  }

  getCurrentCategory() {
    const categoryId = localStorage.getItem("categoryId") || false;
    if (!categoryId) {
      Router.route("home");
    }
    return categoryId;
  }
}
