import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import clsx from "clsx";

const ProductContent = (props) => {
    const { product } = props;
    return (
        <>
            <div
                className={clsx(
                    " border-2 border-gray-200 bg-white p-6 rounded-3xl hover:border-green-800 "
                )}
            >
                <Link to={`${product.id}`}>
                    <img
                        src={product.imageUrl}
                        className=" w-full hover:scale-110 transition-all "
                    />
                    <div className="pl-2">
                        <p className=" text-[23px] pt-2">{product.name}</p>
                        <p className=" text-[18px]">
                            Rs. {product.price} / {product.unitOfSale}
                        </p>
                    </div>
                </Link>
                <AddToCartButton product={product} />
            </div>
        </>
    );
};

export default ProductContent;
