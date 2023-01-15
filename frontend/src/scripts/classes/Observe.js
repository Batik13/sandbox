export class Observe {
  init() {
    if (window.history) {
      var myOldUrl = window.location.href;
      window.addEventListener('hashchange', function () {
        window.history.pushState({}, null, myOldUrl);
      });
    }
  }
}