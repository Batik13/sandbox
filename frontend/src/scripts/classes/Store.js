export class Store {
  constructor() { }

  getList() {
    return [
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
  }
}