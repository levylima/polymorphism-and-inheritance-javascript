import { Animal } from "./Animal";

export class Preguica extends Animal {
    constructor(nome: string, idade: number){
        super(nome, idade)
    }
    public subirArvore() {
        console.log(`${this.nome} está subindo em árvores.`)
    }
}