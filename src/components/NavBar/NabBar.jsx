import { useEffect, useState } from "react";

export const NavBar = ()=> {

   

    const breakpoints = {
        tablet: 768,
        desktop: 1024,
    };
    
    const getDeviceConfig = (width) => {
        if (width >= breakpoints.desktop) {
            return 'desktop';
        } else if (width >= breakpoints.tablet) {
            return 'tablet';
        } else {
            return 'mobile';
        }
    };

    const [device, setDevice] = useState(getDeviceConfig(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setDevice(getDeviceConfig(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <>

{device === 'mobile' && (
                <div className="mobile">
                    <h2>navbar mobile</h2>
                </div>
            )}
            {device === 'tablet' && (
                <div className="tablet">
                    <h2>navbar tablet</h2>
                </div>
            )}
            {device === 'desktop' && (
                <div className="desktop">
                    <h2>navbar desktop</h2>
                </div>
            )}
        </>
    )
}