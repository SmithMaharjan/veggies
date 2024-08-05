import React from "react";
import { useProductContext } from "../context/ProductProvider";
import Reviews from "../components/Reviews";
import Section from "../components/Section";
import ProductCards from "../components/ProductCards";
import Container from "../components/Container";
import category from "../datas/category";

const Product = () => {
    const { handleCategory, activeProduct, toggleCart } = useProductContext();
    return (
        <div className="bg-gray-200 h-full">
            <Container>
                <h1 className=" text-2xl mt-8 mb-2">Our Products</h1>
                <div className=" flex gap-2">
                    <h1 className=" text-[19px]">Category:</h1>
                    <select
                        onChange={handleCategory}
                        className=" border border-gray-400 rounded-3xl px-3 py-2 w-96"
                    >
                        {category.map((option) => {
                            return (
                                <option value={option.value}>
                                    {option.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <ProductCards activeProduct={activeProduct} />
            </Container>
        </div>
    );
};

export default Product;
