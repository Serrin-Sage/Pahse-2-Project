import { useEffect, useState } from 'react'
import Header from './components/Header'
import Wordle from './components/Wordle'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  //Use state to get word solution
  const [solution, setSolution] = useState("")

  //useEffect will run any time the solution changes
  useEffect(() => {
    fetch("http://localhost:3000/solutions")
    .then((res) => res.json())
    .then(data => {
      //grab a random word from the database and set it to the solution word
      const randomSolution = data[Math.floor(Math.random() * data.length)]
      setSolution(randomSolution.word)
      
    })
    .catch(error => console.log(error))
  }, [setSolution])
  console.log(solution)

  return (
    <div className="App">
      <Header />
      <Wordle solution={solution} />
      <ToastContainer />
    </div>
  )
}

export default App
