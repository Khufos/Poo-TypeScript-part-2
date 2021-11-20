import Mage from "./mage";
import { Personagem } from "./Personagem";
import Priest from "./priest";
import warrior from "./warrior";

let mage: Personagem = new Mage("Angelo mage");
let priest: Personagem = new Priest("Angelo priest");

console.log(mage);
console.log(mage.atacar());

//personagens.forEach((p) => console.log(p.atacar()));


