import { useEffect, useState } from 'react'
import Header from './components/Header'
import Wordle from './components/Wordle'
function App() {
  
  //Use state to get word solution
  const [solution, setSolution] = useState()

  //useEffect will run any time the solution changes
  useEffect(() => {
    fetch("http://localhost:3000/solutions")
    .then((res) => res.json())
    .then(data => {
      //grab a random word from the data base and set it to the solution word
      const randomSolution = data[Math.floor(Math.random() * data.length)]
      setSolution(randomSolution.word)
    })
    .catch(error => console.log(error))
  }, [setSolution])

  return (
    <div className="App">
      <Header />
      <Wordle solution={solution} />
      
    </div>
  )
}

export default App
