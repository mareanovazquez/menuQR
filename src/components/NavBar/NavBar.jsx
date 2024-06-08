import { useContext, useEffect, useState } from "react";
import { VisibilityContext } from "../../context/VisibilityContext";

export const NavBar = () => {

    const { isXSmall, isSmall, isMedium, isLarge, isXLarge, isXXLarge } = useContext(VisibilityContext);

    const[showMenu, setShowMenu] = useState(false)

    const handleShowMenu = ()=> {
        setShowMenu(!showMenu)
        }
    
    return (
        <>

            {(isXSmall || isSmall || isMedium) && (
                <>
                    <div className="header">
                    <div className={`toggle ${showMenu ? 'active' : ''}`} onClick={handleShowMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {showMenu &&
                        <div className="container-navbar" id="container-navbar">
                            <nav className="navbar-mobile">
                                <a href="#seccionUno" className="item-mobile"> SECCIÓN UNO</a>
                                <a href="#seccionDos" className="item-mobile">SECCIÓN DOS</a>
                                <a href="#seccionTres" className="item-mobile">SECCIÓN TRES</a>
                                <a href="#seccionCuatro" className="item-mobile">SECCIÓN CUATRO</a>
                                <a href="#seccionCinco" className="item-mobile">SECCIÓN 5</a>
                                <div className="navBarRRSS">
                                    <a href="" className="itemMenuRRSS"><i className="fa fa-instagram"></i></a>
                                    <a href="" className="itemMenuRRSS"><i className="fa fa-envelope"></i></a>
                                    <a href="https://wa.me/ + número prefijo país sin signo + número de teléfono" className="itemMenuRRSS"
                                        target="_blank"><i className="fa fa-whatsapp"></i></a>
                                </div>
                            </nav>
                        </div>
                        }
                    </div>
                </>
            )
            }

            {isLarge && (
                <div className="navbar large">
                    <h2>navbar large</h2>
                </div>
            )}
            {isXLarge && (
                <div className="navbar xlarge">
                    <h2>navbar xlarge</h2>
                </div>
            )}
            {isXXLarge && (
                <div className="navbar xxlarge">
                    <h2>navbar xxlarge</h2>
                </div>
            )}
        </>
    )
}