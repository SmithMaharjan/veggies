import React, { useEffect, useRef } from "react";
import { Link, matchPath, useResolvedPath } from "react-router-dom";

const NavItem = (props) => {
    const { navdata, indicatorBounds, setIndicatorBounds } = props;
    const url = useResolvedPath();

    useEffect(() => {
        if (matchPath(navdata.href, url.pathname)) {
            if (!navRef || !navRef.current) {
                return;
            }
            setIndicatorBounds({
                width: navRef.current.offsetWidth,
                left: navRef.current.offsetLeft,
            });
        }
    }, [url.pathname]);
    const navIndicator = () => {
        setIndicatorBounds({
            width: navRef.current.clientWidth,
            left: navRef.current.offsetLeft,
        });
    };

    const navRef = useRef();

    return (
        <>
            <Link
                to={navdata.href}
                onClick={navIndicator}
                ref={navRef}
                className=" tracking-[3px]"
            >
                {navdata.label}
            </Link>
            <div
                className=" w-12 absolute bottom-0 bg-green-500 h-[5px] transition-all"
                style={indicatorBounds}
            ></div>
        </>
    );
};

export default NavItem;
