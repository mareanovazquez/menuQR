/* LIBRERIAS */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* ESTILOS */
import './styles/App.css'

/* HOOKS */

/* COMPONENTES */
import { NavBar } from './components/NavBar/NavBar'
import { ContainerMain } from './components/Containers/ContainerMain'

/* PAGINAS */
import { Bakery } from './pages/Bakery'
import { Home } from './pages/Home'
import { Bebidas } from './pages/Bebidas'
import { Infusiones } from './pages/Infusiones'
import { Comidas } from './pages/Comidas'
import { Admin } from './pages/Admin'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ContainerMain>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/bebidas' element={<Bebidas />} />
            <Route path='/bakery' element={<Bakery />} />
            <Route path='/infusiones' element={<Infusiones />} />
            <Route path='/comidas' element={<Comidas />} />
            <Route path='/admin' element={<Admin/>}/>
          </Routes>
        </ContainerMain>
      </BrowserRouter>
    </>
  )
}

export default App
