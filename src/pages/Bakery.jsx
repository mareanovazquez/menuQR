import { NavBar } from "../components/NavBar/NavBar"

export const Bakery = () => {
    return (
        <>
        <NavBar/>
            <section className="seccion seccion-bakery">
                <h2>Bakery</h2>
                <div className="menu-container menu-bakery">
                    <div className="menu-header">
                        <span className="header-item"></span>
                        <span className="header-item"></span>
                    </div>
                    <div className="menu-body">
                        <div className="menu-item">
                            <p className="item-name">Medialunas</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Tostada francesa</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Porción de torta</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Cupcakes</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Alfajor triple</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Rollos de canela</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Panqueques</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                        <div className="menu-item">
                            <p className="item-name">Brownie con helado</p>
                            <p className="item-price">$0000.00</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}