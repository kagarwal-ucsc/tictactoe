import React, { useState } from "react"

import styled from "styled-components"

import Space from "./Space"

const GameContainer = styled.div`
  border-radius: 10px;
`

const Game = styled.div`
  display: grid;
  grid-template:
    var(--box-size)
    var(--box-size)
    var(--box-size)
    /
    var(--box-size)
    var(--box-size)
    var(--box-size);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  div:nth-child(2) {
    border-left: 0.8rem solid var(--chalk-color);
    border-right: 0.8rem solid var(--chalk-color);
    margin-bottom: -1.2rem;
    padding-bottom: 1.2rem;
  }
  div:nth-child(4) {
    border-top: 0.8rem solid var(--chalk-color);
    border-bottom: 0.8rem solid var(--chalk-color);
    margin-right: -1.2rem;
    padding-right: 1.2rem;
  }
  div:nth-child(5) {
    border: 0.8rem solid var(--chalk-color);
  }
  div:nth-child(6) {
    border-top: 0.8rem solid var(--chalk-color);
    border-bottom: 0.8rem solid var(--chalk-color);
    margin-left: -1.2rem;
    padding-left: 1.2rem;
  }
  div:nth-child(8) {
    border-left: 0.8rem solid var(--chalk-color);
    border-right: 0.8rem solid var(--chalk-color);
    margin-top: -1.2rem;
    padding-top: 1.2rem;
  }
`

const InitialGameState = {
  board: ["", "", "", "", "", "", "", "", ""],
  playerturn: "X",
  winner: false,
}

const checkForWinner = board => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      console.log(board[a] + " WINS!")
      return board[a]
    }
  }
  return false
}

const TicTacToe = () => {
  const [gameState, setGameState] = useState(InitialGameState)
  const handleClick = e => {
    if (!gameState.winner) {
      const currentPlayer = gameState.playerturn
      const newBoard = gameState.board

      if (!newBoard[e.target.id]) {
        newBoard[e.target.id] = currentPlayer
        setGameState({
          board: newBoard,
          playerturn: currentPlayer === "X" ? "O" : "X",
          winner: checkForWinner(newBoard),
        })
      }
    }
  }
  return (
    <GameContainer>
      <Game>
        {gameState.board.map((row, i) => {
          return (
            <Space key={i} clickHandler={handleClick} id={i}>
              {row}
            </Space>
          )
        })}
        {gameState.winner && <h2>{gameState.winner} WINS!</h2>}
      </Game>
    </GameContainer>
  )
}

export default TicTacToe
