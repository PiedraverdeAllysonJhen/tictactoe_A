import type { BoardProps } from '../type';
import Square from './square';
import { calculateWinner } from '../utils/winnerCalculator';

export function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {   
        return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'x';
    } else {
      nextSquares[i] = 'o';
    }   
    onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }else if (squares.every(square => square !== null)) {
      status = 'Draw';
    }
     else {
      status = 'Next player: ' + (xIsNext ? 'x' : 'o');
    }
    const renderSquare = (i: number) => {
      return <Square value={squares[i]} onSquareClick={() => handleClick(i)} />;
    };
    const boardRows = [];
    for (let row = 0; row < 3; row++) {
      const squaresInRow = [];  
        for (let col = 0; col < 3; col++) { 
            squaresInRow.push(renderSquare(row * 3 + col));
        }
        boardRows.push(
            <div key={row} className="board-row">
                {squaresInRow}
            </div>
        );
    }
    return (
      <>
        <div className="status">{status}</div>
        {boardRows}
      </>
    );
} 
