"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Animal = /** @class */ (function () {
    function Animal(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Animal.prototype.emiteSom = function () {
        console.log("".concat(this.nome, " emite som."));
    };
    return Animal;
}());
exports.Animal = Animal;
