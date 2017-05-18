function cria_cards(name, description) {
    let pessoas = document.querySelector("#pessoas");
    let div = document.createElement("div");
    div.classList.add("teste");

    let template = `
    <a href="#">
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
    </a> 
    `;

    div.innerHTML = template;

    pessoas.appendChild(div);
}

function loadCards() {
    let pessoas = get_pessoas();
    for (let i = 0; i < pessoas.length; i++) {
        let name = pessoas[i].first_namew;
        let lName = pessoas[i].last_name;
        let description = `Endereço: ${pessoas[i].address}. Tipo Sanguineo: ${pessoas[i].blood_type}`

        let fullName = name + " " + lName;

        cria_cards(fullName, description);
    }
}