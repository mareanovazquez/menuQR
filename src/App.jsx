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
import { Login } from './pages/Login'
import { Admin } from './pages/Admin'
import { AdminBakery } from './pages/AdminBakery'
import { AdminInfusiones } from './pages/AdminInfusiones'
import { AdminComidas } from './pages/AdminComidas'
import { AdminBebidas } from './pages/AdminBebidas'

function App() {


  return (
    <>
      <BrowserRouter>
       {/*  <NavBar /> */}
        <ContainerMain>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home />} />
            <Route path='/bebidas' element={<Bebidas />} />
            <Route path='/bakery' element={<Bakery />} />
            <Route path='/infusiones' element={<Infusiones />} />
            <Route path='/comidas' element={<Comidas />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/adminBakery' element={<AdminBakery/>}/>
            <Route path='/adminInfusiones' element={<AdminInfusiones/>}/>
            <Route path='/adminComidas' element={<AdminComidas/>}/>
            <Route path='/adminBebidas' element={<AdminBebidas/>}/>
          </Routes>
        </ContainerMain>
      </BrowserRouter>
    </>
  )
}

export default App
