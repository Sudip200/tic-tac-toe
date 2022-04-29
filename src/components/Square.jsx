import React from "react";
//import "C:/Users/Supriyo/Desktop/tictactoe/src/root/Style.scss";
const Square=({value,onClick,isWinningSquare})=>{
    return(
        
             <button type="button" onClick={onClick} 
             className={`square ${isWinningSquare ? 'winning' : ''} ${
                value === 'X' ? 'text-green' : 'text-orange'
              }`}>{value}</button>
       
        
       
        
    )
}
export default Square;
