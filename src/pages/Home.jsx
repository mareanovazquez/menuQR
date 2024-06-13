import { NavLink } from 'react-router-dom';

export const Home = () => {

    return (
        <>
            <div className="seccion seccion-home ">
                <NavLink to='/infusiones'><div className="item-home">
                    INFUSIONES
                </div>
                </NavLink>
                <NavLink to='/bebidas'>
                    <div className="item-home">
                        BEBIDAS
                    </div>
                </NavLink>
                <NavLink to='/bakery' >
                    <div className="item-home">
                        BAKERY
                    </div>
                </NavLink>
                <NavLink to='/comidas'>
                    <div className="item-home">
                        COMIDAS
                    </div>
                </NavLink>
            </div>
        </>
    )
}