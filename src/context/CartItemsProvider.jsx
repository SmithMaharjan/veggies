import React, { createContext, useContext, useState } from "react";
import Product from "../pages/Product";
const CartContext = createContext();
const CartItemsProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const toggleCart = (ProductId) => {
        setCartItems((oldCartItems) => {
            if (!oldCartItems.includes(ProductId)) {
                return [...oldCartItems, { id: ProductId, quantity: 1 }];
            }
        });
    };
    const inCart = (ProductId) => {
        return cartItems.find((f) => f.id === ProductId);
    };

    const increaseQuantity = (productId) => {
        setCartItems((oldCartItems) => {
            return oldCartItems.map((oldCartItems) =>
                oldCartItems.id === productId
                    ? { ...oldCartItems, quantity: oldCartItems.quantity + 1 }
                    : oldCartItems
            );
        });
    };

    const decreaseQuantity = (productId) => {
        const item = cartItems.find(
            (oldCartItem) => oldCartItem.id === productId
        );

        const newItem = { ...item, quantity: item.quantity - 1 };

        if (newItem.quantity <= 0) {
            setCartItems(
                cartItems.filter((oldCartItem) => oldCartItem.id != productId)
            );
        } else {
            setCartItems(
                cartItems.map((oldCartItem) =>
                    oldCartItem.id == productId ? newItem : oldCartItem
                )
            );
        }
    };

    return (
        <div>
            <CartContext.Provider
                value={{
                    toggleCart: toggleCart,
                    inCart: inCart,
                    cartItems: cartItems,
                    increaseQuantity: increaseQuantity,
                    decreaseQuantity: decreaseQuantity,
                }}
            >
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartItemsProvider;
export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be inside CartContext.Provider");
    }
    return context;
};
