import { TemplatePage } from "./TemplatePage";

export class PageEdit extends TemplatePage {
  create() {
    const tmp = document.createElement('div');
    tmp.innerHTML = `
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-12">
        <label for="categoryName" class="form-label">Category name</label>
        <input type="text" class="form-control" id="categoryName" placeholder="Words from the article" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-6">
        <label for="nativeWord" class="form-label">RU</label>
        <input type="text" class="form-control" id="nativeWord" placeholder="Язык">
      </div>
      <div class="col-md-6">
        <label for="learnWord" class="form-label">EN</label>
        <input type="text" class="form-control" id="learnWord" placeholder="Language">
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Добавить новую пару</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Сохранить</button>
      </div>
    </form>
    `;

    return tmp;
  }
}