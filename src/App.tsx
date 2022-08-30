import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { StyledChangeColorButton, StyledColorBlock } from './index.style'



const App = () => {
  const colors: string[] = ['red', 'brown', 'lightgreen', 'yellow', 'green', 'orange', 'purple', 'blue'  ]

  const [areaColor, setAreaColor] = useState('white')

  const changeToRandomColor = () => {
    setAreaColor(colors[Math.floor(Math.random() * colors.length)])
  }

  return (
    <>
      <StyledColorBlock fill={areaColor}>{areaColor}</StyledColorBlock>
      <StyledChangeColorButton onClick={changeToRandomColor}>change color</StyledChangeColorButton>
    </>
  )
}

export default App;
