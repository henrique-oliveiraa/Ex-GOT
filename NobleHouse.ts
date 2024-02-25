export class NobleHouse {

    nome: string
    lema: string
    quantidadedeDinheiro: number;
    quantidadedeHerdeiro: number;
    quantidadedeSoldado: number;

    constructor(nome: string, lema: string, quantidadedeDinheiro: number, quantidadedeHerdeiro: number, quantidadedeSoldado: number) {

    this.nome = nome;
    this.lema = lema;
    this.quantidadedeDinheiro = quantidadedeDinheiro;
    this.quantidadedeHerdeiro = quantidadedeHerdeiro;
    this.quantidadedeSoldado = quantidadedeSoldado;

    }

    addherdeiros(){
        const arrayHerdeiro:string[] = []


    }

checkSucessao(){
    return `Quantidade de herdeiros são de ${this.quantidadeHerdeiros} e seus nomes são ${this.infoHerdeiros} `
}


}













