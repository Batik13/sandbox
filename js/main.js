const DATA = JSON.parse(localStorage.getItem('data')) || [];

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
  if (id) {
    const config = { data: DATA, id: id };
    const formNode = getNode('form', config);
    formNode.append(getNode('input', config));
    formNode.append(...getNodes('textarea-group', config));

    const addTextareaGroup = document.createElement('div');
    addTextareaGroup.className = CONSTANTS.CLASS_NAMES.ADD_TEXTAREA_GROUP;
    addTextareaGroup.onclick = function () {
      formNode.append(...getNodes('textarea-group', { data: [{ c: [['', '']] }], id: 0 }));
    }
    const buttonNode = document.createElement('button');
    buttonNode.className = CONSTANTS.CLASS_NAMES.BUTTON;
    buttonNode.innerHTML = CONSTANTS.DONE;
    buttonNode.onclick = function (e) {
      addWordsToDATA.call(this);
    }
    formNode.append(addTextareaGroup, buttonNode);
    outputNode.append(formNode);
  }
}

function getNode(value, config) {
  let node = '';
  switch (value) {
    case 'form':
      node = document.createElement('form');
      node.dataset.index = config.id;
      node.className = CONSTANTS.CLASS_NAMES.FORM;
      node.name = CONSTANTS.MAIN_FORM;
      node.onsubmit = e => { e.preventDefault(); }
      break;

    case 'input':
      node = document.createElement('input');
      node.type = 'text';
      node.name = `title`;
      node.required = true;
      node.className = CONSTANTS.CLASS_NAMES.FORM_TITLE;
      node.value = config.data[config.id].h;
      break;

    case 'textarea':
      node = document.createElement('textarea');
      node.className = CONSTANTS.CLASS_NAMES.FORM_TEXTAREA;
      node.placeholder = config.props.placeholder;
      node.value = config.props.value;
      node.required = true;
      break;

    default:
      node = document.createElement('div');
      break;
  }
  return node;
}

function getNodes(value, config) {
  let nodes = [];
  switch (value) {
    case 'textarea-group':
      config.data[config.id].c.forEach((element, index) => {
        const textareaGroup = document.createElement('div');
        textareaGroup.className = CONSTANTS.CLASS_NAMES.TEXTAREA_GROUP;
        Object.keys(element).forEach(key => {
          config.props = {};
          config.props.placeholder = !+key ? CONSTANTS.NATIVE : CONSTANTS.LEARN;
          config.props.value = element[key];
          textareaGroup.append(getNode('textarea', config));
        });
        const removeFormItem = document.createElement('i');
        removeFormItem.onclick = function () {
          this.closest(`.${CONSTANTS.CLASS_NAMES.TEXTAREA_GROUP}`).remove();
        }
        textareaGroup.append(removeFormItem);
        nodes.push(textareaGroup);
      });
      break;

    default:
      nodes = document.createElement('div');
      break;
  }
  return nodes;
}

function addWordsToDATA() {
  const listNumber = this.closest(`.${CONSTANTS.CLASS_NAMES.FORM}`).dataset.index;
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
    setStateApp(CONSTANTS.EDIT);
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
