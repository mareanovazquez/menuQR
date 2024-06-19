import { NavLink } from 'react-router-dom';

export const Admin = () => {

    return(
        <>
        <div className="container-admin">
        <h2>Menú adminstrador</h2>
        <div className="seccion seccion-home ">
                <NavLink to='/adminInfusiones'><div className="item-home">
                    INFUSIONES
                </div>
                </NavLink>
                <NavLink to='/adminBebidas'>
                    <div className="item-home">
                        BEBIDAS
                    </div>
                </NavLink>
                <NavLink to='/adminBakery' >
                    <div className="item-home">
                        BAKERY
                    </div>
                </NavLink>
                <NavLink to='/adminComidas'>
                    <div className="item-home">
                        COMIDAS
                    </div>
                </NavLink>
            </div>
        </div>
        </>
    )
}