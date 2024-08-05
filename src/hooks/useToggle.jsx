import React, { useState } from "react";

const useToggle = (initaial = false) => {
    const [isOpen, setIsOpen] = useState(initaial);
    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };
    const toggle = () => {
        setIsOpen((prev) => !prev);
    };
    return { open, close, toggle, isOpen };
};

export default useToggle;
