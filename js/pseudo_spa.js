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
    <div class="col m6">
        <div class="card hoverable red">
            <div class="row valign-wrapper">
                <div class="col s2">
                    <img src="res/logo.svg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
                </div>
                <div class="card-content white-text col s10">
                    <span class="card-title truncate">${name}</span>
                    <p class="truncate">${description}.</p>
                </div>
            </div>
        </div>
    </div>
    `;

    div.innerHTML = template;

    pessoas.appendChild(div);
}