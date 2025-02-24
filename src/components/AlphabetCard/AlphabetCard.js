import React from 'react'
import './AlphabetCard.css'
    

    
const AlphabetCard = ({letter,onClick,isSelected}) => {
   
  return (
    <div className='card-background' onClick={onClick}>
        <h1 className='card-h1' style={{backgroundColor : isSelected ? "#F96E2A":"transparent",borderRadius:20}}>{letter}</h1>
    </div>
  )
}

export default AlphabetCard