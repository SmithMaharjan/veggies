import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../context/CartItemsProvider";

const AddToCartButton = (props) => {
    const { toggleCart, inCart, increaseQuantity, decreaseQuantity } =
        useCartContext();
    const { product } = props;

    console.log(product);
    return (
        <>
            {inCart(product.id) && inCart(product.id).quantity > 0 ? (
                <div className=" flex w-full h-12">
                    <p
                        onClick={() => {
                            increaseQuantity(product.id);
                        }}
                        className=" w-16 flex justify-center items-center bg-green-600 rounded-s-3xl"
                    >
                        +
                    </p>
                    <p className=" w-full flex justify-center items-center">
                        {inCart(product.id).quantity}
                        {`${product.unitOfSale} in cart`}
                    </p>

                    <p
                        onClick={() => {
                            decreaseQuantity(product.id);
                        }}
                        className=" w-16 flex justify-center items-center bg-green-600 rounded-e-3xl"
                    >
                        -
                    </p>
                </div>
            ) : (
                <button
                    onClick={() => {
                        toggleCart(product.id);
                    }}
                    className=" flex gap-2 items-center justify-center rounded-3xl bg-green-700 text-white w-full py-3"
                >
                    {" "}
                    <FiShoppingCart /> Add To Cart
                </button>
            )}
        </>
    );
};

export default AddToCartButton;
