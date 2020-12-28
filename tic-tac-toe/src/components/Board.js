import React from 'react'
import Square from './Square'

const Board = (props) => {

    const boardSquares = (i) =>{
        return(
            <Square value={props.squares[i]} onClick={()=>props.onClick(i)} />
        )

    }
    return (
        <div className="board">
  
            {boardSquares(0)}
            {boardSquares(1)}
            {boardSquares(2)}

         
            {boardSquares(3)}
            {boardSquares(4)}
            {boardSquares(5)}
    
            {boardSquares(6)}
            {boardSquares(7)}
            {boardSquares(8)}
       
        </div>
    )
}

export default Board

