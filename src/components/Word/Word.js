import React from 'react'
import './Word.css'
const Word = () => {
  return (
    <div>
        <h1 className='word-h1'>Word Entry</h1>
        <form style={{textAlign:'center'}}>
            <label>English Word</label>
            <input className='word-text' type='text'></input>
            <label>Turksih Word</label>
            <input className='word-text' type='text'></input>
            <button className='word-text-button'>Add</button>
            <hr style={{color:'#fff'}}></hr>
        </form>
    </div>
  )
}

export default Word