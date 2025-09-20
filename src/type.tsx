export type Player = 'x' | 'o'| null;

export interface SquareProps{
    value: Player;
    onSquareClick: () => void;
}

export interface BoardProps{
    xIsNext: boolean;
    squares: Player[];
    onPlay: (nextSquares: Player[]) => void;
}