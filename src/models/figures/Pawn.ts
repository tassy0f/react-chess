import { Figure, FigureNames } from "./Figure";
import whiteLogo from "../../assets/white-pawn.png"
import blackLogo from "../../assets/black-pawn.png"
import { Ceil } from "../Ceil";
import { Colors } from "../Colors";

export class Pawn extends Figure {
    
    constructor(color: Colors, ceil: Ceil) {
        super(color, ceil);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Ceil) : boolean {
        if(!super.canMove(target)) {return false;}
        return true;
    }
}