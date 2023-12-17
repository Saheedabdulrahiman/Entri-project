import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combination";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  let gameBoard = [...intialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { squre, Player } = turn;
    const { row, col } = squre;

    gameBoard[row][col] = Player;
  }
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSqureSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSqureSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSqureSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSqureSymbol &&
      firstSqureSymbol === secondSqureSymbol &&
      firstSqureSymbol === thirdSqureSymbol
    ) {
      winner = firstSqureSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSqure(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].Player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { squre: { row: rowIndex, col: colIndex }, Player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard
          onSelectSquare={handleSelectSqure}
          turns={gameTurns}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
