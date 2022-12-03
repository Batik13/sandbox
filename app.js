/*
obj = JSON.stringify(obj);
console.log(JSON.parse(obj).bar);
*/

const DATA = [
  {
    h: 'List name',
    c: [
      {
        n: 'Привет',
        l: 'Hello'
      },
      {
        n: 'Привет',
        l: 'Hello'
      },
      {
        n: 'Привет',
        l: 'Hello'
      },
      {
        n: 'Привет',
        l: 'Hello'
      },
    ],
  },
  {
    h: 'Lorem ipsum',
    c: [
      {
        n: 'Мир',
        l: 'World'
      }
    ],
  },
  {
    h: 'Heading list',
    c: [
      {
        n: 'Привет',
        l: 'Hello'
      }
    ],
  },
];

setStateApp();

function setStateApp(state = '', id = '', outputNode = document.getElementById('app')) {
  switch (state) {
    case 'edit':
      createForm(id, outputNode);
      break;
    case 'train':

      break;
    default:
      createList(outputNode);
      break;
  }
}

function createForm(id, outputNode) {
  outputNode.innerHTML = '';
  const data = DATA[id];
  const formNode = document.createElement('div');
  formNode.className = 'form';
  const inputNode = document.createElement('input');
  inputNode.type = 'text';
  inputNode.className = 'form-name'
  inputNode.value = data.h;
  formNode.append(inputNode);
  data.c.forEach(element => {
    const formItemNode = document.createElement('div');
    formItemNode.className = 'form-item';
    Object.keys(element).forEach(key => {
      let textareaNode = document.createElement('textarea');
      textareaNode.className = 'form-textarea';
      textareaNode.placeholder = key === 'n' ? 'native' : 'learn';
      textareaNode.value = element[key];
      formItemNode.append(textareaNode);
    });
    formNode.append(formItemNode);
  });
  const formAddItemNode = document.createElement('div');
  formAddItemNode.className = 'form-add-item';
  const buttonNode = document.createElement('button');
  buttonNode.className = 'btn';
  buttonNode.innerHTML = 'Done';
  formNode.append(formAddItemNode, buttonNode);
  outputNode.append(formNode);
}

function createList(outputNode) {
  const listNode = document.createElement('div');
  listNode.className = 'list';
  DATA.forEach((element, index) => {
    createListItem(listNode, { heading: element.h, id: index });
  })
  outputNode.append(listNode);
}

function createListItem(outputNode, data) {
  const listItemNode = document.createElement('div');
  listItemNode.className = 'list-item';
  listItemNode.innerHTML = data.heading;
  listItemNode.dataset.id = data.id;
  const editNode = document.createElement('i');
  editNode.innerHTML = 'Edit';
  editNode.onclick = function (e) {
    const parentNode = this.closest('div');
    const id = parentNode.dataset.id;
    setStateApp('edit', id);
  }
  listItemNode.append(editNode);
  outputNode.append(listItemNode);
}
