import { NavBar } from "../components/NavBar/NavBar"

export const Comidas = () => {
    return (
        <>
            <NavBar />
            <div className="seccion seccion-comidas">
                <h2>Comidas</h2>
                <div className="menu-container menu-comidas">
                    <div className="menu-header">
                        <span className="header-item"></span>
                        <span className="header-item"></span>
                    </div>

                    <div className="menu-body">
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Tostada con palta</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Tostado clásico</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Sandwich vegano</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Pan de queso</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Medialunas saladas</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Sandwich de pollo</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Huevos revueltos</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Pizza individual</p>
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