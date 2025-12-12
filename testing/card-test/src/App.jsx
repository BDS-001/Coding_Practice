import { useState } from 'react'
import Menu from './pages/menu'
import './App.css'

function App() {
  const [game, setGame] = useState(false)
  
  return (
    <>
      {game ?
      <div>game</div> :
      <Menu playButtonFunc={setGame} />
      }
    </>
  )
}

export default App
