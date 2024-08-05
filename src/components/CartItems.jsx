import React from "react";
import initialProducts from "../datas/product";
import { useCartContext } from "../context/CartItemsProvider";
import Total from "./Total";

const CartItems = (props) => {
    const { inCart } = useCartContext();
    const { product } = props;
    const itemsInCart = initialProducts.filter((f) => f.id == product.id);

    console.log(itemsInCart);
    return (
        <div>
            {itemsInCart.map((cartItem) => {
                return (
                    <div className=" flex gap-4 border border-gray-200 h-36 rounded-3xl w-[90&] m-4 p-4">
                        {" "}
                        <img
                            src={cartItem.imageUrl}
                            className=" object-contain"
                        />
                        <div>
                            <h1>{cartItem.name}</h1>
                            <p>{`Rs:${cartItem.price}/${cartItem.unitOfSale}`}</p>
                            <p>{`Total: Rs${
                                cartItem.price * inCart(cartItem.id).quantity
                            }`}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CartItems;
