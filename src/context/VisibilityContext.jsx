
import { useEffect, useState } from "react";
import { createContext } from "react";

export const VisibilityContext = createContext([]);

export const VisibilityProvider = ({ children }) => {

    /* ESTADOS Y FUNCIONES PARA INYECTAR A TRAVÉS DEL CONTEXT */
    const [isXSmall, setIsXSmall] = useState(false);
    const [isSmall, setIsSmall] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    const [isLarge, setIsLarge] = useState(false);
    const [isXLarge, setIsXLarge] = useState(false);
    const[isXXLarge, SetIsXXLarge] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsXSmall(width < 576); // X-Small: <576px
            setIsSmall(width >= 576 && width < 768); // Small: >=576px and <768px
            setIsMedium(width >= 768 && width < 992); // Medium: >=768px and <992px
            setIsLarge(width >= 992 && width < 1200); // Large: >=992px and <1200px
            setIsXLarge(width >= 1200 && width < 1400); // X-Large: >=1200px and <1400px
            SetIsXXLarge(width >= 1400); // XX-Large: >=1400px
        };

        handleResize(); // Verificar el tamaño inicial
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <VisibilityContext.Provider
                value={{
                    isXSmall,
                    setIsXSmall,
                    isSmall,
                    setIsSmall,
                    isMedium,
                    setIsMedium,
                    isLarge,
                    setIsLarge,
                    isXLarge,
                    setIsXLarge,
                    isXXLarge,
                    SetIsXXLarge,
                    
                }}>

                {children}

            </VisibilityContext.Provider>
        </>
    )
}