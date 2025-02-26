import React from 'react'
import AlphabetCard from '../AlphabetCard/AlphabetCard'
import './Alphabet.css'

const Alphabet = ({selectedLetter,onLetterSelect}) => {
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   
   
  
  return (
    <div className='alfabe-background'>
        <h3 className='h3-style'>Kelime Defteri</h3>
        <hr style={{color:'white'}}></hr>
       <div className='alphabet-container'>
         {
          letters.map((letter,index) => (
            
            <AlphabetCard key={index} letter={letter} onClick={() => onLetterSelect(letter)}
             isSelected={letter === selectedLetter}/>
          ))
         }
       </div>
    </div>
  )
}

export default Alphabet