import { useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import Dog from './components/Dog'
import './App.css'

function App() {

  return (
    <>
      <Canvas>
        <Dog/>
      </Canvas>
    </>
  )
}

export default App
