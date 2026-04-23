import { useState } from 'react';

function Square({value, onSquareClick, color}) {
  return (
    <button className="square" onClick={onSquareClick} style={{backgroundColor: color}}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [squareColor, setSquareColor] = useState(Array(9).fill("#fff"));
  const [chorusCounter, setChorusCounter] = useState(1);
  const [chorusMode, setChorusMode] = useState(false);
  const [lastChosenTile, setLastChosenTile] = useState(null);

  function validateMove(chr, jprev, jnew){ //Used to check for the chorus part
    const testSquares = squares.slice();
    testSquares[jprev] = chr;
    if (testSquares[4] === chr && jprev !== 4){
      testSquares[jnew] = chr;
      testSquares[jprev] = null;
      if (!calculateWinner(testSquares)){ //did not win
        console.log("Invalid move!");
        return false;
      }
    }
    return true;
  }

  function handleClick(i) {
    if (calculateWinner(squares) || (squares[i] && !chorusMode)) {
      console.log("This happened")
      return;
    }
    const nextSquares = squares.slice();
    if(!chorusMode){ //Not in chorus mode
      if (xIsNext) {
        nextSquares[i] = 'X';
      }
      else {
        nextSquares[i] = 'O';
      } 
    }
    else{ //In chorus mode
      if (xIsNext) {
        //setXIsNext(!xIsNext);
        if (nextSquares[i] === 'X'){
          switch(i){
            case 0:
              squareColor.fill("#fff");
              squareColor[1] = "#ff0";
              squareColor[3] = "#ff0";
              squareColor[4] = "#ff0";
              break;
            case 1:
              squareColor.fill("#fff");
              squareColor[0] = "#ff0";
              squareColor[2] = "#ff0";
              squareColor[3] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[5] = "#ff0";
              break;
            case 2:
              squareColor.fill("#fff");
              squareColor[1] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[5] = "#ff0";
              break;
            case 3:
              squareColor.fill("#fff");
              squareColor[0] = "#ff0";
              squareColor[1] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[6] = "#ff0";
              squareColor[7] = "#ff0";
              break;
            case 4:
              squareColor.fill("#fff");
              squareColor[0] = "#ff0";
              squareColor[1] = "#ff0";
              squareColor[2] = "#ff0";
              squareColor[3] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[5] = "#ff0";
              squareColor[6] = "#ff0";
              squareColor[7] = "#ff0";
              squareColor[8] = "#ff0";
              break;
            case 5:
              squareColor.fill("#fff");
              squareColor[1] = "#ff0";
              squareColor[2] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[7] = "#ff0";
              squareColor[8] = "#ff0";
              break;
            case 6:
              squareColor.fill("#fff");
              squareColor[3] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[7] = "#ff0";
              break;
            case 7:
              squareColor.fill("#fff");
              squareColor[3] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[5] = "#ff0";
              squareColor[6] = "#ff0";
              squareColor[8] = "#ff0";
              break;
            case 8:
              squareColor.fill("#fff");
              squareColor[4] = "#ff0";
              squareColor[5] = "#ff0";
              squareColor[7] = "#ff0";
              break;
          }
          squareColor[i] = "#55dfee";
          setLastChosenTile(i);
        }
        else if(nextSquares[i] === null && squareColor[i] === "#ff0" && validateMove('X',lastChosenTile, i)){
          nextSquares[i] = 'X';
          nextSquares[lastChosenTile] = null; // last chosen tile should be the one in blue
          setXIsNext(!xIsNext);
          squareColor.fill("#fff");
        }
        else{
          return;
        }
      }
      else {
        //setXIsNext(!xIsNext);
        if (nextSquares[i] === 'O'){
          switch(i){
            case 0:
              squareColor.fill("#fff");
              squareColor[1] = "#ff0";
              squareColor[3] = "#ff0";
              squareColor[4] = "#ff0";
              break;
            case 1:
              squareColor.fill("#fff");
              squareColor[0] = "#ff0";
              squareColor[2] = "#ff0";
              squareColor[3] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[5] = "#ff0";
              break;
            case 2:
              squareColor.fill("#fff");
              squareColor[1] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[5] = "#ff0";
              break;
            case 3:
              squareColor.fill("#fff");
              squareColor[0] = "#ff0";
              squareColor[1] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[6] = "#ff0";
              squareColor[7] = "#ff0";
              break;
            case 4:
              squareColor.fill("#fff");
              squareColor[0] = "#ff0";
              squareColor[1] = "#ff0";
              squareColor[2] = "#ff0";
              squareColor[3] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[5] = "#ff0";
              squareColor[6] = "#ff0";
              squareColor[7] = "#ff0";
              squareColor[8] = "#ff0";
              break;
            case 5:
              squareColor.fill("#fff");
              squareColor[1] = "#ff0";
              squareColor[2] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[7] = "#ff0";
              squareColor[8] = "#ff0";
              break;
            case 6:
              squareColor.fill("#fff");
              squareColor[3] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[7] = "#ff0";
              break;
            case 7:
              squareColor.fill("#fff");
              squareColor[3] = "#ff0";
              squareColor[4] = "#ff0";
              squareColor[5] = "#ff0";
              squareColor[6] = "#ff0";
              squareColor[8] = "#ff0";
              break;
            case 8:
              squareColor.fill("#fff");
              squareColor[4] = "#ff0";
              squareColor[5] = "#ff0";
              squareColor[7] = "#ff0";
              break;
          }
          squareColor[i] = "#55dfee";
          setLastChosenTile(i);
        }
        else if(nextSquares[i] === null && squareColor[i] === "#ff0" && validateMove('O',lastChosenTile, i)){
          nextSquares[i] = 'O';
          nextSquares[lastChosenTile] = null;
          setXIsNext(!xIsNext);
          squareColor.fill("#fff");
        }
        else{
          return;
        }
      } 
    }
    setSquares(nextSquares);
    //setSquaresColor(nextSquares)
    if (!chorusMode){
      setXIsNext(!xIsNext); //new conditional
    }
    setChorusCounter(chorusCounter + 1);

    if (chorusCounter >= 6 && !chorusMode){
      setChorusMode(!chorusMode) // Chorus mode gets turned on
    }
  }


  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `The winner is ${winner}! WOWOWOWIE! :D `;
  }
  else if (chorusMode) {
    status = "Now get those stones schmoovin'! :3c [Next player: " + (xIsNext ? 'X' : 'O') + ']';
  }
  else {
    status = `Welcome to Chorus Lapilli! Players, place your 3 stones... [Next player: ` + (xIsNext ? 'X' : 'O') + ']';
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} color={squareColor[0]}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} color={squareColor[1]}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} color={squareColor[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} color={squareColor[3]}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} color={squareColor[4]}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} color={squareColor[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} color={squareColor[6]}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} color={squareColor[7]}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} color={squareColor[8]}/>
      </div>
    </>
  );
}

function calculateWinner(squares) {
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
}
