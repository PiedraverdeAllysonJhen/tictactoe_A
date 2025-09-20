import { useState, useCallback } from 'react';
import type { Player } from '../type';

export interface Scores {
    x: number;
    o: number;
    ties: number;
}

export function useScorer() {
    const [scores, setScores] = useState<Scores>({ x: 0, o: 0, ties: 0 });

    const updateScore = useCallback((winner: Player | null, squares: Player[]) => {
        const isGameComplete = winner !== null || squares.every(square => square !== null);
        
        if (isGameComplete) {
            if (winner) {
                setScores(prev => ({
                    ...prev,
                    [winner]: prev[winner] + 1
                }));
            } else if (squares.every(square => square !== null)) {
                setScores(prev => ({
                    ...prev,
                    ties: prev.ties + 1
                }));
            }
        }
    }, []);

    const resetScores = useCallback(() => {
        setScores({ x: 0, o: 0, ties: 0 });
    }, []);

    return {
        scores,
        updateScore,
        resetScores
    };
}

export const scoringUtils = {
    getTotalGames: (scores: Scores): number => {
        return scores.x + scores.o + scores.ties;
    },
    
    getWinPercentage: (scores: Scores, player: 'x' | 'o'): number => {
        const totalGames = scoringUtils.getTotalGames(scores);
        if (totalGames === 0) return 0;
        return Math.round((scores[player] / totalGames) * 100);
    },
    
    getLeader: (scores: Scores): 'x' | 'o' | 'tie' => {
        if (scores.x > scores.o) return 'x';
        if (scores.o > scores.x) return 'o';
        return 'tie';
    }
};