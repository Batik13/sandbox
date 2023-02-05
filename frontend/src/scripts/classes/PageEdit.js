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
        <div class="row g-3 pb-3">
          <div class="col-md-6">
            <input type="text" class="form-control form-control-lg" placeholder="Ru" required>
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control form-control-lg" placeholder="Eng" required>
          </div>
        </div>
      </div>
      <div class="col-12 mt-0">
        <a href="#add" class="button button--plus button--sm" title="Add new part"></a>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary btn-lg">Done</button>
      </div>
    </form>
    `;

    return tmp;
  }
}