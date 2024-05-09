import React,{useState, useEffect} from 'react'
import Gamecircle from './Gamecircle'
import Header from './Header'
import Footer from './Footer'
import {isWinner,isDraw,aiMove} from './Helper'
import { gameStateDraw,gameStatePlaying,gameStateWin } from './Constants'
import './App.css'


const Gameboard = () => {
const player_0=0
const player_1=1
const player_2=2
const no_Circles=16;

  const [gameBoard,setGameBoard]= useState(Array(16).fill(player_0))
  const[currentPlayer, setCurrentPlayer] = useState(player_1)
 const [gameStatus, setGameStatus] = useState(gameStatePlaying);
const [winPlayer,setWinPlayer]=useState(player_0);

const suggestMove=()=>{
  onClicked(aiMove(gameBoard));
  }

  const onClicked=(id)=>{
      console.log(`You clicked on ${id}`);

      if(gameBoard[id]!==player_0)  return; //Circle already placed here
      if(gameStatus!==gameStatePlaying) return ;//The game has ended - don't allow any more moves
      
      if (isWinner(gameBoard, id, currentPlayer)){
      
          setGameStatus(gameStateWin);
          setWinPlayer(currentPlayer);
      }
     
      if (isDraw(gameBoard, id, currentPlayer)){
        setGameStatus(gameStateDraw);
        setWinPlayer(player_0);
      }

      setGameBoard(prev=>{
        return prev.map((circle,pos)=>{
          if (pos===id){
            return currentPlayer
          }
          return circle;
        })
      })
      setCurrentPlayer(currentPlayer=== player_1?player_2:player_1);

  }
  const renderCircle=(id)=>{
    return (
    <Gamecircle id={id} className={`player_${gameBoard[id]}`} onButtonClicked={onClicked} />
    )
  }

useEffect(()=>{
  initGame();
},[]);

  const initGame=(e)=> {
  setGameBoard(Array(16).fill(player_0));
  setCurrentPlayer(player_1);
  setGameStatus(gameStatePlaying);
  }

  const initBoard=()=>{
    const circles=[];
    for (let i=0;i<no_Circles;i++){
      circles.push(renderCircle(i));
    }
    return circles;
  }



  return (

    

    <div  className='game-container'>
    <Header gameState={gameStatus} winPlayer={winPlayer} currentplayer={currentPlayer}/>
        <div  className='gameBoard' >
        {initBoard()}
    
          </div>
          <Footer onNewGame={initGame} gameStatus={gameStatus} onSuggestBtn={suggestMove}/>
    </div>
    
  )
}

export default Gameboard