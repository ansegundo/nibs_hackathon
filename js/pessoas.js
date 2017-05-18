function cria_cards(name, description, tipo) {
    let pessoas = document.querySelector(`#${tipo}`);
    let div = document.createElement("div");
    div.classList.add("teste");
    let color = 'red';
    if (tipo == "hemocentros")
        color = 'green';

    let template = `
    <a href="#${name+description}">
    <div class="col m6">
        <div class="card hoverable ${color}">
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

    <div id="${name+description}" class="modal">
        <div class="modal-content">
            <h4>${name}</h4>
            <p>${description}</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>
    <script>
        $(document).ready(function() {
                // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
                $('.modal').modal();
            });
    </script>

    `;

    div.innerHTML = template;

    pessoas.appendChild(div);
}

function loadCards(pessoas, tipo) {
    for (let i = 0; i < pessoas.length; i++) {
        let name = pessoas[i].first_namew;
        let lName = pessoas[i].last_name;
        let description = `Endereço: ${pessoas[i].address}. Tipo Sanguineo: ${pessoas[i].blood_type}`

        let fullName = name + " " + lName;

        cria_cards(fullName, description, tipo);
    }
}