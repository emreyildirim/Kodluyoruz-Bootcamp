import React, { useState, useEffect } from "react";
import Board from "./Board";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("");
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);

  const handleClick = (i) => {
    const hist = history.slice(0, stepNumber + 1);
    const current = hist[hist.length - 1];
    const squares = current.squares.slice();

    if (winnerCalculator(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "x" : "o";

    setHistory(hist.concat([{ squares }]));
    setStepNumber(hist.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const descr = move ? "move #" + move : "Restart the game";
    return (
      <button
        key={move}
        id={move}
        className="game-statu"
        onClick={() => jumpTo(move)}
      >
        {descr}
      </button>
    );
  });

  let current = history[stepNumber];
  let winner = winnerCalculator(current.squares);

  useEffect(() => {
    current = history[stepNumber];
    winner = winnerCalculator(current.squares);

    winner ? setStatus(winner) : setStatus("Next player: " + (xIsNext ? "X" : "O"));
  });

 
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        {status !== winner && history.length <10 ? (
          <>
            <div className="next">{status}</div>
            <div className="moves">{moves}</div>
          </>
        ) : null}
        {status == winner  && history.length <= 10 ?(
          <div className="game-winner">
            {history.map((step, move) =>
              move < 1 ? (
                <button
                  onClick={() => window.location.reload()}
                  className="restart"
                >
                  Restart the game
                </button>
              ) : null
            )}
            <div className="winner">Winner {status.toUpperCase()}</div>
          </div>
        ) : null}

        {status !== winner && history.length > 9 ? (
           <button className="draw" onClick={() => window.location.reload()} >Draw</button>
        ) : null}
        {console.log(history.length)}
      </div>
    </div>
  );
};

const winnerCalculator = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;
