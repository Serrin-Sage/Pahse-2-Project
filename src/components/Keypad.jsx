import React, { useEffect, useState } from 'react'

const Keypad = ({ usedKeys }) => {
    
    // const [letters, setLetters] = useState()

    // useEffect(() => {
    //     fetch("http://localhost:3000/letters")
    //     .then(res => res.json())
    //     .then(data => {
    //         setLetters(data)
    //         data.map((item) => {
    //             console.log(item.key)
    //         })
    //     })
    // }, [])

    const letters = [
        {"key": "a"},
        {"key": "b"},
        {"key": "c"},
        {"key": "d"},
        {"key": "e"},
        {"key": "f"},
        {"key": "g"},
        {"key": "h"},
        {"key": "i"},
        {"key": "j"},
        {"key": "k"},
        {"key": "l"},
        {"key": "m"},
        {"key": "n"},
        {"key": "o"},
        {"key": "p"},
        {"key": "q"},
        {"key": "r"},
        {"key": "s"},
        {"key": "t"},
        {"key": "u"},
        {"key": "v"},
        {"key": "w"},
        {"key": "x"},
        {"key": "y"},
        {"key": "z"}
    ]

    const getLetter = (capturedLetter) => {
        console.log(capturedLetter)
    }

    return (
        <div className='keypad'>
            {letters.map((letter) => {
                // const color = usedKeys[letter.key]
                return (
                    <div key={letter.key} className="grey" onClick={() => getLetter(letter.key)}>{letter.key}</div>
                )
            })}
        </div>
    )
}

export default Keypad