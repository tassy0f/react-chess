import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-rook.png"
import whiteLogo from "../../assets/white-rook.png"
import { Ceil } from "../Ceil";
import { Colors } from "../Colors";

export class Rook extends Figure {
    
    constructor(color: Colors, ceil: Ceil) {
        super(color, ceil);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Ceil) : boolean {
        if(!super.canMove(target)) {return false;}
        return true;
    }
}