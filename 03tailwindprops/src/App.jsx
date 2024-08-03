import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-0 rounded-xl mb-4"> Tailwind </h1>
    
      <div className='flex flex-wrap justify-center mt-10'>
      <Card username="Arafat" btn="See Portfolio"/>
      <Card username="Sakib" btn="View Portfolio"/>
      <Card username="Abir"/>
      </div>
      <Button title="Show More" onClick={handleClick} />
    </>
  )
}

export default App
