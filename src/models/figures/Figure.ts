import { Colors } from "../Colors";
import logo from '../../assets/black-bishop.png'
import { Ceil } from "../Ceil";

export enum FigureNames {
    BASE = 'BASE',
    KING = 'KING',
    KNIGHT = 'KNIGHT',
    PAWN = 'PAWN',
    QUEEN = 'QUEEN',
    ROOK = 'ROOK',
    BISHOP = 'BISHOP',

}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    ceil: Ceil;
    name: FigureNames;
    id: number;

    constructor(color: Colors, ceil: Ceil) {
        this.color = color;
        this.ceil = ceil;
        this.ceil.figure = this;
        this.logo = null;
        this.name = FigureNames.BASE;
        this.id = Math.random();
    }

    canMove(target: Ceil) : boolean {
        if(target.figure?.color === this.color) {return false}  
        if (target.figure?.name === FigureNames.KING) {return false}
        return true;
    }

    moveFigure(target: Ceil) : boolean {
        return true;
    }
}