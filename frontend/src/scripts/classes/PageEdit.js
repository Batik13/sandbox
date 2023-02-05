import { TemplatePage } from "./TemplatePage";

export class PageEdit extends TemplatePage {
  create() {
    const tmp = document.createElement('div');
    tmp.innerHTML = `
    <form class="form row g-3 needs-validation" novalidate>
      <div class="col-12">
        <input type="text" class="form-control form-control-lg" placeholder="Category name" required>
      </div>
      <div class="col-12" data-container>
        <div class="expression-group row g-3 pb-3">
          <div class="col-1 expression-group__delete">
            <input class="form-check-input" type="checkbox" value="">
          </div>
          <div class="col">
            <input type="text" class="form-control form-control-lg" placeholder="Ru" required>
          </div>
          <div class="col">
            <input type="text" class="form-control form-control-lg" placeholder="Eng" required>
          </div>
        </div>
      </div>
      <div class="col-12 mt-0">
        <a href="#add" class="button button--plus button--sm" title="Add new part"></a>
      </div>
      <div class="col-12 d-sm-flex justify-content-between">
        <button type="button" class="btn btn-primary btn-lg mb-3" disabled>Delete items</button>
        <div class="d-inline-block">
          <button type="button" class="btn btn-primary btn-lg mb-3">Delete category</button>
          <button type="submit" class="btn btn-primary btn-lg mb-3 ms-sm-3">Save</button>
        </div>
      </div>
    </form>
    `;

    return tmp;
  }

  getForm() {

  }
}