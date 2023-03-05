export class Router {
  static route(hashName) {
    window.location.href = `${window.location.origin}/#${hashName}`;
  }

  static getHash() {
    return window.location.hash.substring(1);
  }
}
