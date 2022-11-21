import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UseApp = (solution) => {

    //number of turns/tries
    const [turn, setTurn] = useState(0)
    //current guess
    const [currentGuess, setCurrentGuess] = useState("")
    //array of guesses to display
    const [wordGuess, setWordGuess] = useState([...Array(6)])
    //guess history to check later
    const [guessHistory, setGuessHistory] = useState([])
    //check if guess os correct
    const [isCorrect, setIsCorrect] = useState(false)
    //keep track of used keys (letters)
    const [usedKeys, setUsedKeys] = useState({})

    //format user guess into array of letter objects
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((letter) => {
            return {
                key: letter,
                color: 'grey'
            }
        })
        //Will need to check for correct or incorrect placement

        return formattedGuess
    }

    //adds a new guess to the wordGuess and guessHistory
    //updates the isCorrect state to check if the guess is correct
    //update the turn tracker
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }

        //used to dispaly previous guesses
        setWordGuess((previousGuesses) => {
            let newGuesses = [...previousGuesses]
            newGuesses[turn] = formattedGuess

            return newGuesses
        })

        //used to check previous input word history
        setGuessHistory((previousHistory) => {
            return [...previousHistory, currentGuess]
        })

        //used to track number of turns taken by user
        setTurn((turnCount) => {
            return turnCount + 1
        })

        //reset current guess state to empty string
        setCurrentGuess('')
    }

    //handle keyup events and track guess by user
    //if user presses enter and the guess is valid, add new guess
    const handleKeyEvent = ({ key }) => {

        //handle the submit from user (pressing enter), only add guess if turn is less than 5
        //do not add duplicate words
        //check if word is 5 characters long
        //check if word is in word list
        if (key === 'Enter') {
            if (turn > 5) {
                console.log("you used all your guesses")
                return
            }

            if (history.includes(currentGuess)) {
                console.log("Word already guessed")
                return
            }

            if (currentGuess.length !== 5) {
                console.log("Guess must be 5 letters")
                return
            }

            const formattedWord = formatGuess()
            addNewGuess(formattedWord)

            //remove previous character from guess string if user presses Backspace
            if (key === 'Backspace') {
                setCurrentGuess((goBackOne) => {
                    return goBackOne.slice(0, -1)
                })
                return
            }

            //tests if key pressed is a letter (using regex) and guess is less than 5
            if (/^[A-Za-z]$/.test(key)) {
                console.log(key)
                if (currentGuess.length < 5) {
                    setCurrentGuess((previousKey) => {
                        return previousKey + key
                    })
                }
            }
        }
    }

    return {turn, currentGuess, wordGuess, isCorrect, handleKeyEvent}
}

export default UseApp