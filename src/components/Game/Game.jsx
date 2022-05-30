import React from 'react'
import { useState } from 'react'

const Game = ({ score, setHome, setEndGame, setCurrentQuestion, setScore }) => {
    return (
        <>
        <main className="game">
        <div className="gamediv">
            <h3>Your score is: {score}</h3>
        </div>
        <button className="h1" onClick={() => {
            setEndGame(false);
            setHome(true);
            setCurrentQuestion(0);
            setScore(0)
        }}>Play again</button>
        </main>
        </>
    );
};

export default Game;