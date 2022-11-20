import WordRow from "./WordRow"
import Keypad from "./Keypad"
const Wordle = ({ solution }) => {
    
    return (
        <div>
            <WordRow />
            <WordRow />
            <WordRow />
            <WordRow />
            <WordRow />
            <WordRow />

            <Keypad />
        </div>
    )
}

export default Wordle