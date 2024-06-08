import { useState } from 'react'
import './styles/App.css'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
