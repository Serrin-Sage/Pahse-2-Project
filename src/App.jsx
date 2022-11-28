import { useEffect, useState } from 'react'
import Header from './components/Header'
import Wordle from './components/Wordle'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  //Use state to get word solution
  const [solution, setSolution] = useState("")
  const [wordlist, setWordList] = useState([])
  //useEffect will run any time the solution changes
  useEffect(() => {
    fetch("http://localhost:3000/solutions")
    .then((res) => res.json())
    .then(data => {
      //grab a random word from the database and set it to the solution word
      const randomSolution = data[Math.floor(Math.random() * data.length)]
      setSolution(randomSolution.word)
      setWordList(data)
    })
    .catch(error => console.log(error))
  }, [setSolution])

  return (
    <div className="App">
      <Header />
      <Wordle solution={solution} wordlist={wordlist}/>
      <ToastContainer 
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark" 
        backgroundColor={"red"}/>
    </div>
  )
}

export default App
