import { useState, useEffect } from "react";
import { Board } from './board';
import type { Player } from '../type';
import { calculateWinner } from '../utils/winnerCalculator';
import { useScorer } from '../utils/scorer';

export function Game() {
    const [history, setHistory] = useState<Player[][]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const { scores, updateScore, resetScores } = useScorer();
    
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: Player[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    function newGame() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    useEffect(() => {
        const winner = calculateWinner(currentSquares);
        const isLatestMove = currentMove === history.length - 1;
        
        if (isLatestMove && currentMove > 0) {
            updateScore(winner, currentSquares);
        }
    }, [currentSquares, currentMove, history.length, updateScore]);

    const moves = history.map((_, move) => {
        const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
        return (
            <li key={move}> 
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-main">
                <div className="scoreboard">
                    <div className="score-card x">
                        <h3>Player X</h3>
                        <div className="score">{scores.x}</div>
                    </div>
                    <div className="score-card">
                        <h3>Ties</h3>
                        <div className="score">{scores.ties}</div>
                    </div>
                    <div className="score-card o">
                        <h3>Player O</h3>
                        <div className="score">{scores.o}</div>
                    </div>
                </div>

                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
            </div>
            
            <div className="game-info">
                <div className="controls">
                    <button onClick={newGame}>New Game</button>
                    <button onClick={resetScores}>Reset Scores</button>
                </div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
