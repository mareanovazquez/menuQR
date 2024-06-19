import { NavBar } from "../components/NavBar/NavBar"

export const Comidas = () => {
    return (
        <>
        <NavBar/>
            <div className="seccion seccion-comidas">
                <h2>Comidas</h2>
                <div className="menu-container menu-comidas">
                    <div className="menu-header">
                        <span className="header-item"></span>
                        <span className="header-item"></span>
                    </div>
                    <div className="menu-body">
                        <div className="menu-item">
                            <p className="item-name">Tostada con palta</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Tostado clásico</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Sandwich vegano</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Pan de queso</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Medialunas saladas</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Sandwich de pollo</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Huevos revueltos</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Pizza individual</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}