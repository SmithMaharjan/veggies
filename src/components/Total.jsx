import React from "react";
import Container from "./Container";
import { useCartContext } from "../context/CartItemsProvider";
import initialProducts from "../datas/product";

const Total = (props) => {
    const { cartItems } = useCartContext();

    const totalQuantity = cartItems.map((oldProduct) => {
        const newItem = initialProducts.find((f) => f.id == oldProduct.id);
        return newItem.price * oldProduct.quantity;
    });
    const total = totalQuantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    return <Container>Total In Cart {total}</Container>;
};

export default Total;
