import { TemplatePage } from "./TemplatePage";

export class PageAdd extends TemplatePage {
  form = '';

  create() {
    this.form = this.getForm();
    const categoryName = this.getCategoryName();
    const expressionGroup = this.getExpressionGroup();
    const dynamicAdditionElement = this.getDynamicAdditionElement();
    const buttons = this.getButtons();

    this.form.append(categoryName, expressionGroup, dynamicAdditionElement, buttons);

    return this.form;
  }

  getForm() {
    const node = document.createElement('form');
    node.classList = 'form row g-3 needs-validation';
    node.noValidate = true;
    return node;
  }

  getCategoryName() {
    const node = this.getDiv({ classList: 'col-12' });
    node.innerHTML = `<input type="text" class="form-control form-control-lg" placeholder="Category name" required>`;
    return node;
  }

  getExpressionGroup() {
    const node = this.getExpressionGroupWrap();
    const nodeItems = this.getExpressionGroupList();
    node.append(nodeItems);
    return node;
  }

  getExpressionGroupWrap() {
    const node = document.createElement('div');
    node.classList = 'col-12';
    node.dataset.expressionGroup = true;
    return node;
  }

  getExpressionGroupList() {
    return this.getExpressionGroupItem();
  }

  getExpressionGroupItem(data = '') {
    const node = document.createElement('div');
    node.classList = 'expression-group row g-3 pb-3';
    const expressionGroupItemDelete = this.getDiv({ classList: 'col-1 expression-group__delete' });
    const expressionGroupItemColNative = this.getDiv({ classList: 'col' });
    const expressionGroupItemColLearn = this.getDiv({ classList: 'col' });

    expressionGroupItemDelete.append(this.getInput({
      classList: 'form-check-input',
      type: 'checkbox',
    }));
    expressionGroupItemColNative.append(this.getInput({
      classList: 'form-control form-control-lg',
      type: 'text',
      placeholder: 'Ru',
      required: true
    }));
    expressionGroupItemColLearn.append(this.getInput({
      classList: 'form-control form-control-lg',
      type: 'text',
      placeholder: 'En',
      required: true
    }));
    node.append(expressionGroupItemDelete, expressionGroupItemColNative, expressionGroupItemColLearn);

    return node;
  }

  getDynamicAdditionElement() {
    const node = this.getDiv({ classList: 'col-12 mt-0' });
    const link = this.getLink({
      href: '#add',
      classList: 'button button--plus button--sm',
      title: 'Add new part',
    });
    node.append(link);
    return node;
  }

  getButtons() {
    const node = this.getDiv({ classList: 'col-12 d-sm-flex justify-content-between' });
    const buttonDeleteItems = this.getButton({
      classList: 'btn btn-primary btn-lg mb-3',
      disabled: true,
      innerText: 'Delete items',
    });
    const buttonGroup = this.getDiv({ classList: 'd-inline-block' });
    const buttonDeleteCategory = this.getButton({
      classList: 'btn btn-primary btn-lg mb-3',
      innerText: 'Delete category',
    });
    const buttonSave = this.getButton({
      type: 'button',
      classList: 'btn btn-primary btn-lg mb-3 ms-sm-3',
      innerText: 'Save',
      onclick: () => {
        let event = new Event("hello", { bubbles: true });
        this.form.dispatchEvent(event);

        if (this.form.checkValidity()) {
          console.log('form Validity');
        }
      }
    });
    buttonGroup.append(buttonDeleteCategory, buttonSave);

    node.append(buttonDeleteItems, buttonGroup);
    return node;
  }
}