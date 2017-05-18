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

loadCards();