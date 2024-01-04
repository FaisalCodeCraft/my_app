import Box from 'components/Box/Box';
import boxes from 'constants/boxes';
import React, { useState } from 'react'

const About = () => {
  const [sqauares, setSquares] = useState(boxes)
  function toggle(id) {
    setSquares(prev => {
      return prev.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }
  const elements = sqauares.map(square => (

    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={()=> toggle (square.id)}
    />
  ))
  return (
    <div>
      {elements}
    </div>
  )
}

export default About;