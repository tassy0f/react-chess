import { Ceil } from "../Ceil";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png"
import whiteLogo from "../../assets/white-king.png"

export class King extends Figure {
    
    constructor(color: Colors, ceil: Ceil) {
        super(color, ceil);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Ceil) : boolean {
        if(!super.canMove(target)) {return false;}
        return true;
    }
}