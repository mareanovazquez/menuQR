import { NavBar } from "../components/NavBar/NavBar"

export const Infusiones = () => {

    return (
        <>
            <NavBar />
            <div className="seccion seccion-infusiones">
                <h2>Infusiones</h2>
                <div className="menu-container menu-cafe">
                    <div className="menu-header">
                        <span className="header-item"></span>
                        <span className="header-item"></span>
                    </div>
                    <div className="menu-body">
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Americano</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Capuchino</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Doble Expreso</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Café con leche</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Chocolatada</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Té de manzanilla</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Té de hierbas</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Té clásico</p>
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