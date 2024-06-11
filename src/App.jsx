import { useState } from 'react'
import './styles/App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Bakery } from './pages/Bakery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Bakery/>
    </>
  )
}

export default App
