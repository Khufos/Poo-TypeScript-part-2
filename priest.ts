import { Personagem } from "./Personagem";
import { Util } from "./Util";

export default class Priest extends Personagem{
    private _espirito: number;
    private _versatilidade: number;
    constructor(nome:string){
        super(nome)
        this._nome = nome;
        this._vidaAtual = 10;
        this._armadura = Util.randomizar(100, 1_000);
        this._versatilidade = Util.randomizar(100, 10_000)
        this._espirito = Util.randomizar(100, 1_000)


    }
    public atacar(): string {
        return "Ataque do Padre";
      }
}