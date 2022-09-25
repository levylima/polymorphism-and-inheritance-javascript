"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cachorro_1 = require("./Cachorro");
var Cavalo_1 = require("./Cavalo");
var Pregui_a_1 = require("./Pregui\u00E7a");
var cachorro = new Cachorro_1.Cachorro('Ninrode', 6);
var cavalo = new Cavalo_1.Cavalo('Benedito', 3);
var preguica = new Pregui_a_1.Preguica('Bilu', 2);
function FazerSom(animal) {
    animal.emiteSom();
}
FazerSom(cachorro);
FazerSom(cavalo);
FazerSom(preguica);
