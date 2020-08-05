import React from "react"
import { Canvas, useThree } from "react-three-fiber"
import { useGesture } from "react-use-gesture"
import { useSpring, a } from "react-spring/three"
import Line from "./components/Line"


function App() {
  return (
    <div className="App">
      <Canvas>
        <Line coords={[[0,0,0]]} />
      </Canvas>
    </div>
  )
}

export default App
