import { useState } from 'react'
import Form from './Form'
const Header = () => {
    const [showForm, setShowForm] = useState(false)
    const refreshPage = () => {
        window.location.reload(false);
        }
    return (
        <div className="header">
            <div className='left-container'>
                <button onClick={() => {setShowForm(!showForm)}}>Add a Word</button>
            </div>
            <div className='middle-container'>
                <h1 className="title">Wordle Project</h1>
            </div>
            <div className="right-container">
                <button onClick={refreshPage} className="reset-button">Get New Word</button>
            </div>

            {showForm && <Form />}
        </div>
    )
}

export default Header