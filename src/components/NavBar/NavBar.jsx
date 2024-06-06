import { useContext, useEffect, useState } from "react";
import { VisibilityContext } from "../../context/VisibilityContext";

export const NavBar = () => {

    const { isBkXSmall, isBkSmall, isBkMedium, isBkLarge, isBkXLarge, isBkXXLarge } = useContext(VisibilityContext);

    return (
        <>

            {isBkXSmall && (
                <div className="navbar xSmall">
                    <h2>navbar XSmall</h2>
                </div>
            )

            }
            {isBkSmall && (
                <div className="navbar small">
                    <h2>navbar small</h2>
                </div>
            )}
            {isBkMedium && (
                <div className="navbar medium">
                    <h2>navbar medium</h2>
                </div>
            )}
            {isBkLarge && (
                <div className="navbar large">
                    <h2>navbar large</h2>
                </div>
            )}
            {isBkXLarge && (
                <div className="navbar xlarge">
                    <h2>navbar xlarge</h2>
                </div>
            )}
            {isBkXXLarge && (
                <div className="navbar xxlarge">
                    <h2>navbar xxlarge</h2>
                </div>
            )}
        </>
    )
}