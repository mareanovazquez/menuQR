import { NavBar } from "../components/NavBar/NavBar"

export const Bakery = () => {
    return (
        <>
            <NavBar />
            <div className="seccion seccion-bakery">
                <h2>Bakery</h2>
                <div className="menu-container menu-bakery">
                    <div className="menu-header">
                        <span className="header-item"></span>
                        <span className="header-item"></span>
                    </div>
                    <div className="menu-body">
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Medialunas</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Tostada francesa</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Porción de torta</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Cupcakes</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Alfajor triple</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Rollos de canela</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Panqueques</p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Brownie con helado</p>
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