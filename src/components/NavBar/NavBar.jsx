import { useContext, useEffect, useRef, useState } from "react";
import { VisibilityContext } from "../../context/VisibilityContext";
import marca from "../../assets/marca.svg";
import marcaWhite from "../../assets/marcaWhite.svg"
import { NavLink } from 'react-router-dom';
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
                                    <NavLink className='item-desktop' to='/' onClick={handleShowMenu}>Home</NavLink>
                                    <NavLink className='item-desktop' to='/infusiones' onClick={handleShowMenu} >Infusiones</NavLink>
                                    <NavLink className='item-desktop' to='/bebidas' onClick={handleShowMenu}>Bebidas</NavLink>
                                    <NavLink className='item-desktop' to='/bakery' onClick={handleShowMenu}>Bakery</NavLink>
                                    <NavLink className='item-desktop' to='/comidas' onClick={handleShowMenu}>Comidas</NavLink>
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
                        <NavLink className='item-desktop' to='/'>{menuFixed ?
                            <img src={marca} alt="logo" />
                            :
                            <img src={marcaWhite} alt="logo" />}</NavLink>

                        <NavLink className='item-desktop' to='/infusiones'>Infusiones</NavLink>
                        <NavLink className='item-desktop' to='/bebidas'>Bebidas</NavLink>
                        <NavLink className='item-desktop' to='/bakery'>Bakery</NavLink>
                        <NavLink className='item-desktop' to='/comidas'>Comidas</NavLink>
                    </nav>
                </div>
            )}

        </>
    )
}