import { TemplatePage } from "./TemplatePage";

export class PageHome extends TemplatePage {
  create() {
    const data = [
      {
        name: "Colors",
        content: [
          ["Красный", "Red"],
          ["Зеленый", "Green"],
          ["Желтый", "Yellow"],
        ]
      },
      {
        name: "Sizes",
        content: [
          ["Длинный", "Long"],
          ["Маленький", "Small"],
        ]
      },
    ];

    const row = document.createElement('div');
    row.classList = 'row justify-content-center';

    data.forEach(element => {
      const col = document.createElement('div');
      col.classList = 'col-3';

      const card = document.createElement('div');
      card.classList = 'card-item';

      const name = document.createElement('span');
      name.classList = 'card-item__name';
      name.innerHTML = element.name;
      card.append(name);

      ['train', 'edit'].forEach(element => {
        const link = document.createElement('a');
        link.classList = `card-item__link card-item__link--${element}`;
        link.href = `#${element}`;
        link.innerHTML = element;
        card.append(link);
      })


      col.append(card);
      row.append(col);
    })

    return row;
  }
}