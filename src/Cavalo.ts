import { Animal } from "./Animal";
import { PodeCorrer } from "./PodeCorrer";

export class Cavalo extends Animal implements PodeCorrer{

    constructor(nome: string, idade: number){
        super(nome, idade)
    }

    public corre(): void {
        console.log(`${this.nome} está correndo.`)
    }
}