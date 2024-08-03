import { useState } from 'react'
import './App.css'

function App() {
  let [score, setScore] = useState(10);

  const increaseValue = () => {
    score += 1
    setScore(score)
  }

  const decreaseValue = () => {
    if (score > 0) {
      score -= 1
      setScore(score)
    }
  }

  return (
    <>
      <div>
        <h1>Hi there! I'm Arafat Hussain</h1>
        <h2>Score: {score}</h2>
        <button onClick = {increaseValue}>Increase</button>
        <button onClick={decreaseValue}>Decrease</button>
      </div>
    </>
  )
}

export default App
