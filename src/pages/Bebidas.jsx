import { NavBar } from "../components/NavBar/NavBar"

export const Bebidas = () => {

    return (
        <>
        <NavBar/>
            <div className="seccion seccion-bebidas">
                <h2>Bebidas</h2>
                <div className="menu-container menu-bebidas">
                    <div className="menu-header">
                        <span className="header-item"></span>
                        <span className="header-item"></span>
                    </div>
                    <div className="menu-body">
                        <div className="menu-item">
                            <p className="item-name">Frappé de café</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Frappé de chocolate</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Té helado</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Licuado de frutas</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Limonada</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Jugo de naranja</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Gaseosa chica</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Agua mineral</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}