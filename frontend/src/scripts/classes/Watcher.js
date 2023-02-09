import config from './../config';

export class Watcher {
  static updatePage(callback) {
    const observer = new MutationObserver(function (mutations) {
      for (let mutation of mutations) {
        if (mutation.type === 'childList') {
          if(mutation.addedNodes.length !== 0) {
            const actions = {
              add: true
            };
            callback(actions);
          }
        }
      }
    });

    const app = document.getElementById(config.appNodeId);
    observer.observe(app, { childList: true });
  }
}