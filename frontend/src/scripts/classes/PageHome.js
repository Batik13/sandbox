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
      card.innerHTML = element.name;

      col.append(card);
      row.append(col);
    })

    return row;
  }
}