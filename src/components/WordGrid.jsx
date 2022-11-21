import React from 'react'
import WordRow from './WordRow'

const Grid = ({ currentGuess, guesses, turn}) => {
  return (
    <div>
        {guesses.map((guess, i) => {
           if (turn === i) {
            return <WordRow key={i} currentGuess={currentGuess} />
           }
           return <WordRow key={i} guess={guess}/>
        })}
    </div>
  )
}

export default Grid