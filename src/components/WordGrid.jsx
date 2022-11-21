import WordRow from "./WordRow";

const WordGrid = ({ currentGuess, guesses, turnNumber }) => {
    return (
        <div>
            {guesses.map((guesses, i) => {
                if (turnNumber === i) {
                    return <WordRow key={i} currentGuess={currentGuess} />
                }
                return <WordRow key={i} guess={guess} />
            })}
        </div>
    )
}

export default WordGrid