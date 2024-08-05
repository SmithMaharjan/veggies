import React, { createContext, useContext, useState } from "react";
import initialProducts from "../datas/product";
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const handleCategory = (e) => {
        setActiveCategory(e.target.value);
    };
    console.log(activeCategory);
    const activeProduct = initialProducts.filter((f) =>
        parseInt(activeCategory) === 0 ? true : f.categoryId == activeCategory
    );

    return (
        <div>
            <ProductContext.Provider
                value={{
                    handleCategory: handleCategory,
                    activeProduct: activeProduct,
                }}
            >
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductProvider;
export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error(
            "useProductContext must be inside ProductContext.Provider"
        );
    }
    return context;
};
