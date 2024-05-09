import React from 'react'

const Gamecircle = ({id,className,onButtonClicked}) => {
  
  return (
    <div>
      <button className={`gameCircle ${className}`} onClick={()=> onButtonClicked(id)}></button>
    </div>
  )
}

export default Gamecircle