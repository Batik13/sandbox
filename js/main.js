let DATA = JSON.parse(localStorage.getItem('data')) || [];

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
  const emptyArr = new Array(2).fill('');
  !DATA[id] && DATA.push({ h: CONSTANTS.LIST_HEADING_PLACEHOLDER, c: [emptyArr] });
  const tmp = new Template({ data: DATA, id: id });
  const formNode = tmp.get('form')[0];
  const deleteListNode = tmp.get('delete-list')[0];
  deleteListNode.onclick = () => {
    confirm(CONSTANTS.CONFIRM_TEXT) && (() => {
      DATA = DATA.filter((element, index) => {
        return index !== +id;
      });
      localStorage.setItem('data', JSON.stringify(DATA));
      setStateApp();
    })()
  }
  formNode.append(deleteListNode);
  formNode.append(...tmp.get('input'));
  formNode.append(...tmp.get('form-row'));
  const addRow = document.createElement('div');
  addRow.className = CONSTANTS.CLASS_NAMES.ADD_TEXTAREA_GROUP;
  addRow.onclick = function () {
    formNode.append(...tmp.get('form-row', { data: [{ c: [emptyArr] }], id: 0 }));
  }
  const buttonNode = tmp.get('button')[0];
  buttonNode.onclick = function (e) {
    addWordsToDATA.call(this);
  }
  formNode.append(addRow, buttonNode);
  outputNode.append(formNode);
}

function addWordsToDATA() {
  const listNumber = this.closest(`.${CONSTANTS.CLASS_NAMES.FORM}`).id;
  const formTitle = Array.from(document.querySelectorAll(`.${CONSTANTS.CLASS_NAMES.FORM_TITLE}`));
  const textareaList = Array.from(document.querySelectorAll(`.${CONSTANTS.CLASS_NAMES.FORM} textarea`));
  const isEmptyField = [...formTitle, ...textareaList].find(el => !el.value);
  if (!isEmptyField) {
    DATA[listNumber] = {
      h: formTitle[0].value,
      c: (() => {
        const content = [];
        const textareaValuesList = Array.from(textareaList, el => el.value);
        for (i = 0; i < textareaValuesList.length; i += 2) {
          content.push(textareaValuesList.slice(i, i + 2))
        }
        return content;
      })()
    }
    localStorage.setItem('data', JSON.stringify(DATA));
    setStateApp();
  }
}

function createList(outputNode) {
  outputNode.innerHTML = '';
  const listNode = document.createElement('div');
  listNode.className = CONSTANTS.CLASS_NAMES.LIST;
  DATA.forEach((element, index) => {
    createListItem(listNode, { heading: element.h, id: index });
  })
  const listItemNode = document.createElement('div');
  listItemNode.className = CONSTANTS.CLASS_NAMES.LIST_ITEM;
  const formNewList = document.createElement('div');
  formNewList.className = CONSTANTS.CLASS_NAMES.ADD_TEXTAREA_GROUP;
  formNewList.onclick = function (e) {
    setStateApp(CONSTANTS.EDIT, DATA.length);
  }
  listItemNode.append(formNewList);
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
