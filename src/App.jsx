import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Product from "./pages/Product";
import ReviewsProvider from "./context/ReviewsProvider";
import ProductProvider from "./context/ProductProvider";
import CartItemsProvider from "./context/CartItemsProvider";
import SingleProduct from "./pages/SingleProduct";
import Contact from "./pages/Contact";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/products",
                    children: [
                        {
                            index: true,
                            element: <Product />,
                        },
                        {
                            path: "/products/:id",
                            element: <SingleProduct />,
                        },
                    ],
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },

                {
                    path: "/Faq",
                    element: <Faq />,
                },
            ],
        },
    ]);

    return (
        <>
            <CartItemsProvider>
                <ReviewsProvider>
                    <ProductProvider>
                        <RouterProvider router={router} />
                    </ProductProvider>
                </ReviewsProvider>
            </CartItemsProvider>
        </>
    );
}

export default App;
