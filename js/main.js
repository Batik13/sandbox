// const DATA = JSON.parse(localStorage.getItem('data')) || [];

DATA = [
  {
    h: 'List name',
    c: [['Привет', 'hello'], ['Мир', 'World']],
  },
];


setStateApp();

function setStateApp(state = '', id = '', outputNode = document.getElementById(CONSTANTS.APP)) {
  switch (state) {
    case CONSTANTS.EDIT:
      createForm(id, outputNode);
      break;
    case CONSTANTS.TRAIN:

      break;
    default:
      createList(outputNode);
      break;
  }
}

function createForm(id, outputNode) {
  outputNode.innerHTML = '';
  if (!id) {
    DATA.push({
      h: CONSTANTS.LIST_HEADING_PLACEHOLDER,
      c: [{ n: '', l: '' }]
    });
    id = 0;
  }
  const data = DATA[id];
  const formNode = document.createElement('form');
  formNode.dataset.index = id;
  formNode.className = CONSTANTS.CLASS_NAMES.FORM;
  formNode.name = CONSTANTS.MAIN_FORM;
  formNode.onsubmit = e => { e.preventDefault(); }
  const inputNode = document.createElement('input');
  inputNode.type = 'text';
  inputNode.name = `title`;
  inputNode.required = true;
  inputNode.className = CONSTANTS.CLASS_NAMES.FORM_TITLE;
  inputNode.value = data.h;
  formNode.append(inputNode);
  data.c.forEach(element => {
    const formItemNode = document.createElement('div');
    formItemNode.className = CONSTANTS.CLASS_NAMES.FORM_ITEM;
    Object.keys(element).forEach(key => {
      let textareaNode = document.createElement('textarea');
      textareaNode.className = CONSTANTS.CLASS_NAMES.FORM_TEXTAREA;
      textareaNode.placeholder = key === 'n' ? CONSTANTS.NATIVE : CONSTANTS.LEARN;
      textareaNode.value = element[key];
      textareaNode.required = true;
      formItemNode.append(textareaNode);
    });
    formNode.append(formItemNode);
  });
  const formAddItemNode = getAddItemNode();
  formAddItemNode.onclick = function () {
    console.log(this);
  }
  const buttonNode = document.createElement('button');
  buttonNode.className = CONSTANTS.CLASS_NAMES.BUTTON;
  buttonNode.innerHTML = CONSTANTS.DONE;
  buttonNode.onclick = function (e) {
    addWordsToDATA.call(this);
  }
  formNode.append(formAddItemNode, buttonNode);
  outputNode.append(formNode);
}

function addWordsToDATA() {
  const listNumber = this.closest(`.${CONSTANTS.CLASS_NAMES.FORM}`).dataset.index;
  const formTitle = Array.from(document.querySelectorAll(`.${CONSTANTS.CLASS_NAMES.FORM_TITLE}`));
  const textareaList = Array.from(document.querySelectorAll(`.${CONSTANTS.CLASS_NAMES.FORM} textarea`));
  const isEmptyField = [...formTitle, ...textareaList].find(el => !el.value);
  if (!isEmptyField) {
    const content = [];
    const textareaValuesList = Array.from(textareaList, el => el.value);

    for (i = 0; i < textareaValuesList.length; i += 2) {
      let tempArray;
      tempArray = textareaValuesList.slice(i, i + 2);
      content.push(tempArray)
    }

    DATA[listNumber] = {
      h: formTitle[0].value,
      c: (() => {
        return 55;
      })()
    }

    console.log(DATA[0].c);
  }
}

function getAddItemNode() {
  const formAddItemNode = document.createElement('div');
  formAddItemNode.className = CONSTANTS.CLASS_NAMES.ADD_ITEM;
  return formAddItemNode;
}

function createList(outputNode) {
  const listNode = document.createElement('div');
  listNode.className = CONSTANTS.CLASS_NAMES.LIST;
  DATA.forEach((element, index) => {
    createListItem(listNode, { heading: element.h, id: index });
  })
  const listItemNode = document.createElement('div');
  listItemNode.className = CONSTANTS.CLASS_NAMES.LIST_ITEM;
  const formAddItemNode = getAddItemNode();
  formAddItemNode.onclick = function (e) {
    setStateApp(CONSTANTS.EDIT);
  }
  listItemNode.append(formAddItemNode);
  listNode.append(listItemNode);
  outputNode.append(listNode);
}

function createListItem(outputNode, data) {
  const listItemNode = document.createElement('div');
  listItemNode.className = CONSTANTS.CLASS_NAMES.LIST_ITEM;
  listItemNode.innerHTML = data.heading;
  listItemNode.dataset.id = data.id;
  const editNode = document.createElement('i');
  editNode.innerHTML = CONSTANTS.EDIT;
  editNode.onclick = function (e) {
    const parentNode = this.closest('div');
    const id = parentNode.dataset.id;
    setStateApp(CONSTANTS.EDIT, id);
  }
  listItemNode.append(editNode);
  outputNode.append(listItemNode);
}
