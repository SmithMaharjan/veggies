import React, { useRef } from "react";
import Section from "./Section";
import clsx from "clsx";
import useClickOutside from "../hooks/useClickOutside";

const Drawer = (props) => {
    const { close, isOpen, drawerButtonRef, children } = props;
    const drawerMainRef = useRef();
    const drawerContentRef = useRef();
    useClickOutside(drawerMainRef, drawerContentRef, drawerButtonRef, close);

    return (
        <div>
            <Section>
                <div
                    ref={drawerMainRef}
                    className={clsx(
                        "fixed top-0 left-0 h-full w-full bg-black/15 z-99",
                        isOpen ? "visible opacity-100" : "invisible opacity-0"
                    )}
                >
                    <div
                        ref={drawerContentRef}
                        className={clsx(
                            "absolute flex flex-col top-0 right-0 w-80 bg-white h-full z-99",
                            isOpen
                                ? "visible opacity-100"
                                : "invisible opacity-0"
                        )}
                    >
                        <div className=" overflow-scroll">{children}</div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Drawer;
