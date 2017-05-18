function page_test() {
    let page = document.querySelector(".content");

    page.innerHTML = `
    <h1>Pau no seu cu</h1>
    `
}

function cria_cards(name, description) {
    `
    <div class="row">
        <div class="col s12 m6">
          <div class="card default-primary-color">
            <div class="card-content white-text">
              <span class="card-title">${name}Card Title</span>
              <p>${description}.</p>
            </div>
          </div>
        </div>
      </div>
    `
}