import PromptSync = require ('prompt-sync');
const prompt = PromptSync();

export abstract class Animal {
    public nome: string;
    public idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    public emiteSom(){
        console.log(`${this.nome} emite som.`)
    }
}