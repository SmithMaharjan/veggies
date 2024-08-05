import React, { useRef, useState } from "react";
import navdatas from "../datas/navdatas";
import NavItem from "./NavItem";
import BrandLogo from "./BrandLogo";
import SearchBar from "./SearchBar";
import Container from "./Container";
import { FiShoppingCart } from "react-icons/fi";
import Drawer from "./Drawer";
import useToggle from "../hooks/useToggle";
import { IoCloseOutline } from "react-icons/io5";
import initialProducts from "../datas/product";
import CartItems from "./CartItems";
import { useCartContext } from "../context/CartItemsProvider";
import Total from "./Total";
import clsx from "clsx";
import brandLogo from "/images/avocadoes-logo.png";

const Navbar = () => {
    const [indicatorBounds, setIndicatorBounds] = useState({
        left: 0,
        width: 60,
    });
    const {
        open: openDrawer,
        close: closeDrawer,
        togggle: toggleDrawer,
        isOpen: isOpenDrawer,
    } = useToggle(false);
    const drawerButtonRef = useRef();
    const { cartItems } = useCartContext();

    return (
        <div>
            <Container navbar="navbar">
                <h1 className=" text-3xl">
                    <span className=" text-green-600">Ve</span>ggies
                </h1>
                <SearchBar />
                <ul className=" relative flex gap-7 ml-28 z-0">
                    {navdatas.map((navdata) => {
                        return (
                            <NavItem
                                navdata={navdata}
                                indicatorBounds={indicatorBounds}
                                setIndicatorBounds={setIndicatorBounds}
                            />
                        );
                    })}
                </ul>
                <button
                    ref={drawerButtonRef}
                    onClick={openDrawer}
                    className=" relative flex gap-2 justify-center items-center ml-48 text-[18px] rounded-3xl px-3 py-2 border border-gray-200"
                >
                    <FiShoppingCart />
                    Cart
                    <div
                        className={clsx(
                            "absolute -bottom-1 -right-3 rounded-full w-6 h-6 bg-green-600 text-white",
                            cartItems.length === 0
                                ? " invisible opacity-0"
                                : "visible opacity-100"
                        )}
                    >
                        {cartItems.length}
                    </div>
                </button>
                <Drawer
                    close={closeDrawer}
                    isOpen={isOpenDrawer}
                    drawerButtonRef={drawerButtonRef}
                >
                    <div className=" flex gap-32 items-center p-4 border-b-gray-300 border">
                        <BrandLogo />
                        <IoCloseOutline
                            className=" text-4xl"
                            onClick={closeDrawer}
                        />
                    </div>
                    <ul>
                        {cartItems.map((product) => {
                            return <CartItems product={product} />;
                        })}
                    </ul>
                    <div className=" absolute bottom-0">
                        <Total />
                    </div>
                </Drawer>
            </Container>
        </div>
    );
};

export default Navbar;
