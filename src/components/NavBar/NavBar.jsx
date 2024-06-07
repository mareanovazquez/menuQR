import { useContext, useEffect, useState } from "react";
import { VisibilityContext } from "../../context/VisibilityContext";

export const NavBar = () => {

    const { isXSmall, isSmall, isMedium, isLarge, isXLarge, isXXLarge } = useContext(VisibilityContext);

    return (
        <>

            {isXSmall && (
                <div className="navbar xSmall">
                    <h2>navbar XSmall</h2>
                </div>
            )

            }
            {isSmall && (
                <div className="navbar small">
                    <h2>navbar small</h2>
                </div>
            )}
            {isMedium && (
                <div className="navbar medium">
                    <h2>navbar medium</h2>
                </div>
            )}
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