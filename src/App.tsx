import React, { useState } from 'react'
import './App.css'
import { Canvas } from 'react-three-fiber'

import Line  from './components/Line'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Canvas>
      <Line coords={[[0, 0, 0], [0, 1, 0]]} ></Line>
      </Canvas>
    </div>
  )
}

export default App
