import { Ceil } from "../Ceil";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-bishop.png"
import whiteLogo from "../../assets/white-bishop.png"

export class Bishop extends Figure {
    
    constructor(color: Colors, ceil: Ceil) {
        super(color, ceil);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: Ceil) : boolean {
        if(!super.canMove(target)) {return false;}
        return true;
    }
}