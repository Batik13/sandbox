class Template {
  constructor(config) {
    this.config = config;
  }

  get = (value, props = {}) => {
    const isPropsEmpty = Object.keys(props).length === 0 && props.constructor === Object;
    let nodes = [];
    switch (value) {
      case 'form':
        if (isPropsEmpty) {
          props = {
            id: this.config.id,
            className: CONSTANTS.CLASS_NAMES.FORM,
            name: CONSTANTS.MAIN_FORM,
            onsubmit: e => { e.preventDefault() }
          }
        }
        nodes.push(merge(document.createElement('form'), props));
        break;

      case 'input':
        if (isPropsEmpty) {
          props = {
            type: 'text',
            name: `title`,
            required: true,
            className: CONSTANTS.CLASS_NAMES.FORM_TITLE,
            value: this.config.data[this.config.id].h
          }
        }
        nodes.push(merge(document.createElement('input'), props));
        break;

      case 'button':
        if (isPropsEmpty) {
          props = {
            className: CONSTANTS.CLASS_NAMES.BUTTON,
            innerHTML: CONSTANTS.DONE,
          }
        }
        nodes.push(merge(document.createElement('button'), props));
        break;

      case 'textarea':
        if (isPropsEmpty) {
          props = {
            className: CONSTANTS.CLASS_NAMES.FORM_TEXTAREA,
            placeholder: this.config.props.placeholder,
            value: this.config.props.value,
            required: true
          }
        }
        nodes.push(merge(document.createElement('textarea'), props));
        break;

      case 'form-row':
        this.config = !isPropsEmpty ? props : this.config;
        this.config.data[this.config.id].c.forEach((element, index) => {
          const textareaGroup = document.createElement('div');
          textareaGroup.className = CONSTANTS.CLASS_NAMES.TEXTAREA_GROUP;
          Object.keys(element).forEach(key => {
            this.config.props = {};
            this.config.props.placeholder = !+key ? CONSTANTS.NATIVE : CONSTANTS.LEARN;
            this.config.props.value = element[key];
            textareaGroup.append(this.get('textarea')[0]);
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
}