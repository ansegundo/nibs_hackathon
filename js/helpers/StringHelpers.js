class StringHelper {
    static titlePessoas(pessoas) {

        return `${pessoas.first_namew} ${pessoas.last_name}`;
    }

    static descriptionPessoas(pessoas) {

        return `Endereço: ${pessoas.address}. Tipo Sanguineo: ${pessoas.blood_type}`;
    }

    static titleDoacao(doacao) {

        return `${doacao.receptor.name}`;
    }

    static descriptionDoacao(doacao) {

        return `
        Tipo Sanguineo: ${doacao.receptor.tipo_sanguineo}.
        Hemocentro: ${doacao.hemocentro}`;
    }
}