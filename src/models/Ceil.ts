import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Ceil {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor (board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.available = false;
        this.id = Math.random();
    }

    isCeilEmpty(): boolean {
        return this.figure === null
    }

    isEmptyVertical(target: Ceil): boolean {
        // if (this.x !== target.x) {
        //     return false;
        //   }
      
        //   const min = Math.min(this.y, target.y);
        //   const max = Math.max(this.y, target.y);
        //   for (let y = min + 1; y < max; y++) {
        //     if(!this.board.getCeil(this.x, y).isCeilEmpty()) {
        //       return false
        //     }
        //   }
          return true;
    }

    isEmptyHorizontal(target: Ceil): boolean {
        return true;
    }   
    
    isEmptyDiagonal(target: Ceil): boolean {
        return true;
    } 

    setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.ceil = this;
    }
    

    moveFigure(target: Ceil) {
        if(this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target)
            target.setFigure(this.figure);
            this.figure = null;
        }
    }
}