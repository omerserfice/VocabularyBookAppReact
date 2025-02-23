import React from 'react'
import AlphabetCard from '../AlphabetCard/AlphabetCard'
import './Alphabet.css'

const Alphabet = () => {
  return (
    <div className='title-background'>
        <h3 className='h3-style'>ALFABE</h3>
        <hr style={{color:'white'}}></hr>
        <AlphabetCard/>
        <AlphabetCard/>
        <AlphabetCard/>
        <AlphabetCard/>
        <AlphabetCard/>
        <AlphabetCard/>
    </div>
  )
}

export default Alphabet