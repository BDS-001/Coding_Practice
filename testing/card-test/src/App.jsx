import { useState } from 'react'
import Menu from './pages/Menu'
import Game from './pages/Game'
import './App.css'

function App() {
  const [game, setGame] = useState(false)
  
  return (
    <>
      {game ?
      <Game/> :
      <Menu playButtonFunc={setGame} />
      }
    </>
  )
}

export default App
