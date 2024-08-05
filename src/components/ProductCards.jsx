import React from "react";
import initialProducts from "../datas/product";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import ProductContent from "./ProductContent";

const ProductCards = (props) => {
    const { activeProduct } = props;

    return (
        <>
            <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 ">
                {activeProduct.map((product) => {
                    return (
                        <>
                            <ProductContent product={product} />
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default ProductCards;
