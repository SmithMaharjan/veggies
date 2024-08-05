import React, { useEffect } from "react";

const useClickOutside = (MainRef, ContentRef, allowedElement, close) => {
    useEffect(() => {
        const handleToggleDrawer = (e) => {
            if (
                MainRef.current &&
                MainRef.current == e.target &&
                allowedElement.current != e.target
            ) {
                close();
            }
        };
        document.addEventListener("click", handleToggleDrawer);
        return () => {
            document.removeEventListener("click", handleToggleDrawer);
        };
    });
    return {};
};

export default useClickOutside;
