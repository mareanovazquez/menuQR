
import { useEffect, useState } from "react";
import { createContext } from "react";

export const VisibilityContext = createContext([]);

export const VisibilityProvider = ({ children }) => {

    /* ESTADOS Y FUNCIONES PARA INYECTAR A TRAVÉS DEL CONTEXT */
    const [isBkXSmall, setIsBkXSmall] = useState(false);
    const [isBkSmall, setIsBkSmall] = useState(false);
    const [isBkMedium, setIsBkMedium] = useState(false);
    const [isBkLarge, setIsBkLarge] = useState(false);
    const [isBkXLarge, setIsBkXLarge] = useState(false);
    const[isBkXXLarge, SetIsBkXXLarge] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsBkXSmall(width < 576); // X-Small: <576px
            setIsBkSmall(width >= 576 && width < 768); // Small: >=576px and <768px
            setIsBkMedium(width >= 768 && width < 992); // Medium: >=768px and <992px
            setIsBkLarge(width >= 992 && width < 1200); // Large: >=992px and <1200px
            setIsBkXLarge(width >= 1200 && width < 1400); // X-Large: >=1200px and <1400px
            SetIsBkXXLarge(width >= 1400); // XX-Large: >=1400px
        };

        handleResize(); // Verificar el tamaño inicial
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <VisibilityContext.Provider
                value={{
                    isBkXSmall,
                    setIsBkXSmall,
                    isBkSmall,
                    setIsBkSmall,
                    isBkMedium,
                    setIsBkMedium,
                    isBkLarge,
                    setIsBkLarge,
                    isBkXLarge,
                    setIsBkXLarge,
                    isBkXXLarge,
                    SetIsBkXXLarge,
                    
                }}>

                {children}

            </VisibilityContext.Provider>
        </>
    )
}