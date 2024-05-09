import React from 'react'
import { gameStatePlaying } from './Constants'
const Footer = ({onNewGame, onSuggestBtn, gameStatus}) => {
  return (
    <div className='footer'>
    {
      gameStatus===gameStatePlaying &&
      <button onClick={onSuggestBtn} className='btn'>Suggest</button>
    }{
      gameStatus!==gameStatePlaying &&
        <button onClick={onNewGame} className='btn'>New Game</button>
    }
    </div>
  )
}

export default Footer