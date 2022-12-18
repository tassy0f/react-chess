import { Ceil } from "./Ceil";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
    ceils: Ceil[][] = [];

    public initCeils() {
        for (let i = 0; i < 8; i++) {
            const rowArray: Ceil[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    rowArray.push(new Ceil(this, j, i, Colors.BLACK, null)) // black cells
                } else {
                    rowArray.push(new Ceil(this, i, j, Colors.WHITE, null)) // white cells
                }
            }
            this.ceils.push(rowArray);
        }
    }

    public getCeil(x: number, y: number) {
        return this.ceils[y][x];
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCeil(i, 1));
            new Pawn(Colors.WHITE, this.getCeil(i, 6));
        }
    };
    
    private addKnights() {
        new Knight(Colors.BLACK, this.getCeil(1, 0));
        new Knight(Colors.BLACK, this.getCeil(6, 0));

        new Knight(Colors.WHITE, this.getCeil(1, 7));
        new Knight(Colors.WHITE, this.getCeil(6, 7));
    };

    private addKings() {
        new King(Colors.BLACK, this.getCeil(4, 0));

        new King(Colors.WHITE, this.getCeil(4, 7));
    };

    private addBishops() {
        new Bishop(Colors.BLACK, this.getCeil(2, 0));
        new Bishop(Colors.BLACK, this.getCeil(5, 0));

        new Bishop(Colors.WHITE, this.getCeil(2, 7));
        new Bishop(Colors.WHITE, this.getCeil(5, 7));
    };

    private addQueens() { // ferz'
        new Queen(Colors.BLACK, this.getCeil(3, 0));

        new Queen(Colors.WHITE, this.getCeil(3, 7));
    };

    private addRooks() {
        new Rook(Colors.BLACK, this.getCeil(0, 0));
        new Rook(Colors.BLACK, this.getCeil(7, 0));

        new Rook(Colors.WHITE, this.getCeil(0, 7));
        new Rook(Colors.WHITE, this.getCeil(7, 7));
    };


    public addFigures() {
        this.addBishops()
        this.addKings()
        this.addKnights()
        this.addPawns()
        this.addQueens()
        this.addRooks()
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.ceils = this.ceils
        return newBoard;
    }

    public highlightCeilAtack(selectedCeil: Ceil | null) {
        for (let i = 0; i < this.ceils.length; i++) {
            const rowArr = this.ceils[i];
            for (let j = 0; j < rowArr.length; j++) {
                const target = rowArr[j]; // suda mozet pohodit' figure
                target.available = !!selectedCeil?.figure?.canMove(target)
            }
            
        }
    }
}