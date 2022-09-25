import { Animal } from "./Animal";
import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./Preguiça";

const cachorro = new Cachorro('Ninrode', 6);
const cavalo = new Cavalo('Benedito', 3);
const preguica = new Preguica ('Bilu', 2);

function FazerSom(animal: Animal){
    animal.emiteSom();
}

FazerSom(cachorro);
FazerSom(cavalo);
FazerSom(preguica);