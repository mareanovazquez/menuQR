import { NavLink } from "react-router-dom"

export const Footer = ()=> {


    return(
        <>

        <div className="footer">
            <nav className="navBar-footer">
                <NavLink className="item-footer" to='/home'> Menú clientes</NavLink>
                <NavLink className='item-footer' to='/admin'> Menú administrador</NavLink>
            </nav>
        </div>
        </>
    )
}