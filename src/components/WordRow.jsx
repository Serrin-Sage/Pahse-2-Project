const WordRow = ({ guessed, currentGuess }) => {

    //if the guess 
    if (guessed) {
        return (
            <div className='row past'>
                {guessed.map((letter, i) => (
                    <div key={i} className={letter.color}>{letter.key}</div>
                ))}
            </div>
        )
      }
    
      if (currentGuess) {
        let letters = currentGuess.split('')
    
        return (
          <div className='row current'>
            {letters.map((letter, i) => (
                <div key={i} className='filled'>{letter}</div>
            ))}
            {[...Array(5 - letters.length)].map((_, i) => (
                <div key={i}></div>
            ))}
          </div>
        )
      }
    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default WordRow