import { useEffect, useState } from "react"
import UseApp from "./UseApp"
import WordRow from "./WordRow"
import WordGrid from "./WordGrid"
import Keypad from "./Keypad"
const Wordle = ({ solution }) => {
    
    //creeate an object of current guess, key event, guesses, if guess is correct, turn number, and used keys
    const { currentGuess, handleKeyEvent, guesses, isCorrect, turnNumber, usedKeys } = UseApp(solution)
    
    //listen for key events (eventually will be used for Modals)
    useEffect(() => {
        //listen for key up
        window.addEventListener('keyup', handleKeyEvent)
        //remove if isCorrect is true or turn is greater than 5 (both signify GAME OVER)
        if (isCorrect || turnNumber > 5) {
            window.removeEventListener('keyup', handleKeyEvent)
        }

        return () => window.removeEventListener('keyup', handleKeyEvent)

        //runs only when these dependencies change
    }, [handleKeyEvent, isCorrect, turnNumber])

    console.log(solution)
    return (
        <div>
            <WordGrid currentGuess={currentGuess} guesses={guesses} turnNumber={turnNumber} />

            <Keypad />
        </div>
    )
}

export default Wordle