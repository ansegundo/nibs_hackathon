function page_test() {
    let page = document.querySelector(".content");

    page.innerHTML = `
    <h1>Pau no seu cu</h1>
    `
}

function cria_cards(name, description) {
    let pessoas = document.querySelector("#pessoas");
    let div = document.createElement("div");

    let template = `
    <div class="row">
        <div class="col s12 m6">
          <div class="card red">
            <div class="card-content white-text">
              <span class="card-title">${name}</span>
              <p>${description}.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    div.innerHTML = template;

    pessoas.appendChild(div);
}