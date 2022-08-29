import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'



const App = () => {
  const colors: string[] = ['red', 'brown', 'lightgreen', 'yellow', 'green', 'orange', 'purple', 'blue'  ]

  const [areaColor, setAreaColor] = useState('white')

  const changeToRandomColor = () => {
    setAreaColor(colors[Math.floor(Math.random() * colors.length)])
  }

  return (
    <>
      <div style={{ width: '50px', height: '50px', background: areaColor }}>{areaColor}</div>
      <button onClick={changeToRandomColor}>change color</button>
    </>
  )
}

export default App;
