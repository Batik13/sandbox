import { TemplatePage } from "./TemplatePage";
import { Store } from "./Store";

export class PageAdd extends TemplatePage {
  create() {
    const form = this.getForm();
    const categoryName = this.getCategoryName();
    const expressionGroup = this.getExpressionGroup();


    // tmp.innerHTML = `
    // <form class="form row g-3 needs-validation" novalidate>
    //   <div class="col-12">
    //     <input type="text" class="form-control form-control-lg" placeholder="Category name" required>
    //   </div>
    //   <div class="col-12" data-expression-group>
    //     <div class="expression-group row g-3 pb-3">
    //       <div class="col-1 expression-group__delete">
    //         <input class="form-check-input" type="checkbox" value="">
    //       </div>
    //       <div class="col">
    //         <input type="text" class="form-control form-control-lg" placeholder="Ru" required>
    //       </div>
    //       <div class="col">
    //         <input type="text" class="form-control form-control-lg" placeholder="Eng" required>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="col-12 mt-0">
    //     <a href="#add" class="button button--plus button--sm" title="Add new part"></a>
    //   </div>
    //   <div class="col-12 d-sm-flex justify-content-between">
    //     <button type="button" class="btn btn-primary btn-lg mb-3" disabled>Delete items</button>
    //     <div class="d-inline-block">
    //       <button type="button" class="btn btn-primary btn-lg mb-3">Delete category</button>
    //       <button type="submit" class="btn btn-primary btn-lg mb-3 ms-sm-3">Save</button>
    //     </div>
    //   </div>
    // </form>
    // `;
    form.append(categoryName, expressionGroup);

    return form;
  }

  getForm() {
    const node = document.createElement('form');
    node.classList = 'form row g-3 needs-validation';
    node.noValidate = true;
    return node;
  }

  getCategoryName() {
    const node = this.getCol({ classList: 'col-12' });
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
    const store = new Store();
    const currentCategory = store.getCurrentCategory();
    const category = store.getCategory(currentCategory);
    const items = [];
    // console.log(currentCategory);

    // category.forEach(element => {
    //   items.push(this.getExpressionGroupItem(element));
    // });
    return items;
  }

  getExpressionGroupItem() {
    const node = document.createElement('div');
    node.classList = 'expression-group row g-3 pb-3';

    return node;
  }

  //   <div class="expression-group row g-3 pb-3">
  // //       <div class="col-1 expression-group__delete">
  // //         <input class="form-check-input" type="checkbox" value="">
  // //       </div>
  // //       <div class="col">
  // //         <input type="text" class="form-control form-control-lg" placeholder="Ru" required>
  // //       </div>
  // //       <div class="col">
  // //         <input type="text" class="form-control form-control-lg" placeholder="Eng" required>
  // //       </div>
  // //     </div>
}