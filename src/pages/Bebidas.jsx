import { NavBar } from "../components/NavBar/NavBar"

export const Bebidas = () => {

    return (
        <>
            <NavBar />
            <div className="seccion seccion-bebidas">
                <h2>Bebidas</h2>
                <div className="menu-container menu-bebidas">
                    <div className="menu-header">
                        <span className="header-item"></span>
                        <span className="header-item"></span>
                    </div>
                    <div className="menu-body">
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Frappé de café</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Frappé de chocolate</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Té helado</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Licuado de frutas</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Limonada</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Jugo de naranja</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Gaseosa chica</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Agua mineral</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}