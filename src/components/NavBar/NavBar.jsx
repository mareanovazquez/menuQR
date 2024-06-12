import { useContext, useEffect, useRef, useState } from "react";
import { VisibilityContext } from "../../context/VisibilityContext";
import marca from "../../assets/marca.svg";
import marcaWhite from "../../assets/marcaWhite.svg"

export const NavBar = () => {

    const { isXSmall, isSmall, isMedium, isLarge, isXLarge, isXXLarge } = useContext(VisibilityContext);
    const [showMenu, setShowMenu] = useState(false)
    const [menuFixed, setMenuFixed] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

   
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && showMenu) {
                handleShowMenu();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showMenu]);

    const navbarRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const navBar = navbarRef.current;
            const seccionActiva = document.querySelector('.seccion')

            if (navBar && seccionActiva) {
                const seccionActivaRect = seccionActiva.getBoundingClientRect();

                if (window.scrollY > seccionActivaRect.top) {
                    navBar.classList.add('fixed');
                    setMenuFixed(true)
                } else {
                    navBar.classList.remove('fixed');
                    setMenuFixed(false)
                }
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
                            <div className={`container-navbar ${showMenu ? 'showMenu' : ''}`} id="container-navbar">
                                <nav className="navbar-mobile">
                                    <a href="#seccionUno" className="item-mobile" onClick={handleShowMenu}> SECCIÓN UNO</a>
                                    <a href="#seccionDos" className="item-mobile" onClick={handleShowMenu}>SECCIÓN DOS</a>
                                    <a href="#seccionTres" className="item-mobile" onClick={handleShowMenu}>SECCIÓN TRES</a>
                                    <a href="#seccionCuatro" className="item-mobile" onClick={handleShowMenu}>SECCIÓN CUATRO</a>
                                    <a href="#seccionCinco" className="item-mobile" onClick={handleShowMenu}>SECCIÓN CINCO</a>
                                    <div className="navBarRRSS">
                                        <a href="" className="itemMenuRRSS" onClick={handleShowMenu}><i className="fa fa-instagram"></i></a>
                                        <a href="" className="itemMenuRRSS" onClick={handleShowMenu}><i className="fa fa-envelope"></i></a>
                                        <a href="https://wa.me/ + número prefijo país sin signo + número de teléfono" className="itemMenuRRSS"
                                            target="_blank" onClick={handleShowMenu}><i className="fa fa-whatsapp"></i></a>
                                    </div>
                                </nav>
                            </div>
                        }
                    </div>
                </>
            )
            }

            {(isLarge || isXLarge || isXXLarge) && (
                <div className="header">
                    <nav ref={navbarRef} className="navBar-desktop" id="navBar">
                        {menuFixed ?
                        <img src={marca} alt="logo" /> 
                        :
                        <img src={marcaWhite} alt="logo"/> }
                        <a href="#seccionUno" className="item-desktop">SECCIÓN UNO</a>
                        <a href="#seccionDos" className="item-desktop">SECCIÓN DOS</a>
                        <a href="#seccionTres" className="item-desktop">SECCIÓN TRES</a>
                        <a href="#seccionCuatro" className="item-desktop">SECCIÓN CUATRO</a>
                        <a href="#seccionCinco" className="item-desktop">SECCIÓN CINCO</a>
                    </nav>
                </div>
            )}

        </>
    )
}