import React,{useState} from "react";
import Board from "./components/Board.jsx";
import History from "./components/History";
import { calculateWinner } from "./helper.jsx";
import './root/Style.scss';
import StatusMessage from "./components/Status.jsx";
const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];
const App =() => {
 const [history,setHistory]=useState(NEW_GAME)

  const [currentMove,setCurrentMove]=useState(0);
  const current =history[currentMove];
    //react life cycle -->when a component is added updatd removed
    //Mounting(constractor->render->componentDidMount) ,Updating(render->didUpdate)a,Unmounting(componentWillUnmount(removing diagram) )
   const {winner,winningSquares}=calculateWinner(current.board);
   
    
    const handleSquareClick=position=>{
        if(current.board[position] || winner){
            return;
        }
     setHistory((prev)=>{
       const last = prev[prev.length-1]

      const newBoard= last.board.map((square,pos)=>{
          if(pos===position){
            return last.isXNext? 'X':'0';
          }
         return square ;
      });

      return prev.concat({board:newBoard,isXNext:!last.isXNext});
     });
    //setIsNext(prev=>!prev)
    setCurrentMove(prev=>prev+1);
    };
    const moveTo=(move)=>{
     setCurrentMove(move);
    };
    const onNewGame=()=>{
      setHistory(NEW_GAME);
      setCurrentMove(0);
    }
    return(
      <div className="app">
    <h1>TIC <span className="text-green">TAC</span> TOE
</h1>
    <StatusMessage winner={winner} current={current}/>
   
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>

    <button type="button" onClick={onNewGame}  className={`btn-reset ${winner ? 'active' : ''}`}
>Start new game</button>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    <div className="bg-balls" />

    </div>
    );
  
  
    
    };

export default App;
