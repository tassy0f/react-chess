import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-knight.png"
import whiteLogo from "../../assets/white-knight.png"
import { Ceil } from "../Ceil";
import { Colors } from "../Colors";

export class Knight extends Figure {
    
    constructor(color: Colors, ceil: Ceil) {
        super(color, ceil);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }

    canMove(target: Ceil) : boolean {
        if(!super.canMove(target)) {return false;}
        return true;
    }
}