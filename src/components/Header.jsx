import React from 'react'
import { gameStateDraw,gameStatePlaying,gameStateWin } from './Constants'

const Header = ({gameState,currentplayer,winPlayer}) => {

    const renderLabel =()=>{
switch(gameState){
    case gameStatePlaying:
        return <div>Player {currentplayer} Turn</div>
    case gameStateWin:
        return <div>Player {winPlayer} wins!</div>  
    case gameStateDraw:
        return <div>It's a Draw</div>     
    default:     
}
    }
  return (
    <div className='panel header'>
        <div className='header-text'>{renderLabel()}</div>
    </div>
  );
}

export default Header;