class Doador {
    constructor(name, bloodType) {
        this.name = name;
        this.tipo_sanguineo = bloodType;
        this._euDoei = [];
        this._meDoaram = [];
    }

    get doacoesEuFiz() {
        return [].concat(this._euDoei);
    }

    get doacoesParaMim() {
        return [].concat(this._meDoaram);
    }

    doar(receptor, hemocentro) {
        let doacao = new Doacao(this, receptor, hemocentro);
        receptor.receberDoacao(this, receptor, hemocentro);
        this._euDoei.push(doacao);
    }

    receberDoacao(doador) {
        let doacao = new Doacao(doador, this, "Hooli");
        this._meDoaram.push(doacao);
    }
}