const Modal = ({ isCorrect, turn, solution }) => {
    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <div className="modal">
            { isCorrect ? (
                <div>
                    <h1>You Win!</h1>
                    <p className="solution">{solution}</p>
                    <p>You found the solution in {turn} guesses</p>
                    <button onClick={() => refreshPage()} className="reset-button">Play Again?</button>
                </div>
            ) : (
                <div>
                    <h1>You Lost!</h1>
                    <p>The solution was <p className='solution'>{solution}</p></p>
                    <button onClick={() => refreshPage()} className='reset-button'>Try Again</button>
                </div>
            )

            }
        </div>
    )
}

export default Modal