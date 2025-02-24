import React from 'react'
import './WordList.css'
const WordList = ({selectedLetter}) => {

  
  return (
    <div>
      <h1 className='word-list-h1'>Words related to the letter</h1>
      <h2 className='word-list-h2'>{selectedLetter}</h2>
    
    </div>

  )
}

export default WordList