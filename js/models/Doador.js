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
        receptor.receberDoacao(doacao);
        this._euDoei.push(doacao);
        console.log(this._euDoei);
    }

    receberDoacao(doacao) {
        this._meDoaram.push(doacao);
    }
}