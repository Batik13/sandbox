import config from './../config';

import { PageTemplate } from "./PageTemplate";
import { Store } from "./Store";

export class PageHome extends PageTemplate {
  create() {
    const row = this.getRow();
    const cols = this.getDivs();
    const colButton = this.getDiv({ classList: 'col-sm-12 col-md-4 d-flex align-items-center' });
    const buttonAdd = this.getButtonAdd();

    colButton.append(buttonAdd);
    row.append(...cols, colButton);
    return row;
  }

  getRow() {
    const row = document.createElement('div');
    row.classList = 'row justify-content-center';
    return row;
  }

  getDivs() {
    const store = new Store();
    const data = store.getCategoryList();
    const cols = [];

    if (data) {
      data.forEach((element, id) => {
        const colLayout = this.getDiv({ classList: 'col-sm-12 col-md-4' });
        const card = this.getCard(id);
        const cardName = this.getCardName(element);
        const cardLinks = this.getCardLinks();

        card.append(cardName, ...cardLinks);
        colLayout.append(card);

        cols.push(colLayout);
      });
    }

    return cols;
  }

  getCard(id) {
    const card = document.createElement('div');
    card.classList = 'card-item';
    card.dataset.id = id;
    return card;
  }

  getCardName(obj) {
    const cardName = document.createElement('span');
    cardName.classList = 'card-item__name';
    cardName.innerHTML = obj.name;
    return cardName;
  }

  getCardLinks() {
    const links = [];
    ['train', 'edit'].forEach(element => {
      const link = document.createElement('a');
      link.classList = `card-item__link card-item__link--${element}`;
      link.href = `#${element}`;
      link.innerHTML = element;
      links.push(link);
    });

    links[1].onclick = function () {
      PageHome.setCategoryIdInStore(this.closest('.card-item').dataset.id);
    };

    return links;
  }

  getButtonAdd() {
    const observer = new MutationObserver(function (mutations) {
      for (let mutation of mutations) {
        if (mutation.type === 'childList') {
          if(mutation.addedNodes.length !== 0) {
            console.log(mutations);
          }
        }
      }
    });

    const app = document.getElementById(config.appNodeId);

    const link = this.getLink({
      href: '#add',
      classList: 'button button--plus',
      title: 'Add new category',
      onclick: () => {
        observer.observe(app, { childList: true });
      }
    });

    return link;
  }

  static setCategoryIdInStore(categoryId) {
    localStorage.setItem('categoryId', categoryId);
  }
}