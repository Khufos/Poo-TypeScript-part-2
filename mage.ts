import { Personagem } from "./Personagem";
import {Util} from "./Util"

export default class Mage extends Personagem{
    private _intelecto:number;
    private _velocidade:number;
 
    constructor(nome: string){
        super(nome)
        this._nome = nome;
        this._armadura = Util.randomizar(1_000, 10_000);
        this._vidaMaxima = Util.randomizar(200, 10_000);
        this._vidaAtual = Util.randomizar(100, 10_000);
        this._intelecto = Util.randomizar(100, 10_000);
        this._velocidade = Util.randomizar(10, 10_000);

        
        

    }
    
    public atacar(): string {
        return "Ataque do Mago";
      }
    
    public defender(atacante: Personagem):number{
       throw new Error("Method not implemented");
        
    }
}