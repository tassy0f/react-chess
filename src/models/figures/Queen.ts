import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-queen.png"
import whiteLogo from "../../assets/white-queen.png"
import { Ceil } from "../Ceil";
import { Colors } from "../Colors";

export class Queen extends Figure {
    
    constructor(color: Colors, ceil: Ceil) {
        super(color, ceil);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
    }

    canMove(target: Ceil) : boolean {
        if(!super.canMove(target))
      return false;
    if(this.ceil.isEmptyVertical(target))
      return true;
    if(this.ceil.isEmptyHorizontal(target))
      return true;
    if(this.ceil.isEmptyDiagonal(target))
      return true;
    return false
    }
}