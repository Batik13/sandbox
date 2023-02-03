import { TemplatePage } from "./TemplatePage";
import { Store } from "./Store";

export class PageHome extends TemplatePage {
  create() {
    const row = this.getRow();
    const cols = this.getCols();
    const colButton = this.getCol({ classList: 'col-3 d-flex align-items-center' });
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

  getCols() {
    const store = new Store();
    const data = store.getList();
    const cols = [];

    data.forEach(element => {
      const colLayout = this.getCol({ classList: 'col-3' });
      const card = this.getCardWrap();
      const cardName = this.getCardName(element);
      const cardLinks = this.getCardLinks();

      card.append(cardName, ...cardLinks);
      colLayout.append(card);

      cols.push(colLayout);
    });

    return cols;
  }

  getCol(config) {
    const col = document.createElement('div');
    col.classList = config.classList;
    return col;
  }

  getCardWrap() {
    const card = document.createElement('div');
    card.classList = 'card-item';
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

    return links;
  }

  getButtonAdd() {
    const button = document.createElement('a');
    button.href = `#add`;
    button.classList = 'button button--plus';
    button.innerHTML = '+';

    return button;
  }
}