import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UseApp = (solution) => {

    //number of turns/tries
    const [turn, setTurn] = useState(0)
    //current guess
    const [currentGuess, setCurrentGuess] = useState("")
    //array of guesses 
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
    }
}

export default UseApp