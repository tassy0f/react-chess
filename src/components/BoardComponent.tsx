import React, { FC, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import { Ceil } from '../models/Ceil';
import CeilComponent from './CeilComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {  // declire functional component and destruturization of interfeses props on line 4
    const [selectedCeil, setSelectedCeil] = useState<Ceil | null>(null);

    useEffect(() => {
        highlightCeilAtack()
    }, [selectedCeil])

    function clickOnFigure(ceil: Ceil) {
        if (selectedCeil && selectedCeil !== ceil && selectedCeil.figure?.canMove(ceil)){
            selectedCeil.moveFigure(ceil);
            setSelectedCeil(null);
        } else {
            setSelectedCeil(ceil);
        }
    }

    function highlightCeilAtack() {
        board.highlightCeilAtack(selectedCeil);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div className='board'>
            {board.ceils.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map(ceil => 
                        <CeilComponent
                            click = {clickOnFigure}
                            ceil = {ceil}
                            key = {ceil.id}
                            selected = {ceil.x === selectedCeil?.x && ceil.y === selectedCeil?.y}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent;