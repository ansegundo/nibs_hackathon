class Doacao {
    constructor(doador, receptor, hemocentro) {
        this.tipo_sanguineo_doador = doador.tipo_sanguineo;
        this.tipo_sanguineo_receptor = receptor.tipo_sanguineo;
        this.doador = doador;
        this.receptor = receptor;
        this.hemocentro = hemocentro;
    }
}