import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button color="Red" onClick={() => setColor("red")} />
          <Button color="Green" onClick={() => setColor("green")} />
          <Button color="Blue" onClick={() => setColor("blue")} />
          <Button color="Yellow" onClick={() => setColor("yellow")} />
          <Button color="Olive" onClick={() => setColor("olive")} />
          <Button color="Purple" onClick={() => setColor("purple")} />
          <Button color="Pink" onClick={() => setColor("pink")} />
        </div>
      </div>
    </div>
  )
}

export default App
