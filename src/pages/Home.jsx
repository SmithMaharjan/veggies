import React, { version } from "react";
import Reviews from "../components/Reviews";
import { useCartContext } from "../context/CartItemsProvider";
import veggiesBanner from "/images/veggies-banner-2.jpg";
import Section from "../components/Section";
import Container from "../components/Container";
import Product from "./Product";
import { Link } from "react-router-dom";

const Home = () => {
    const { cartItems } = useCartContext();
    console.log(cartItems);
    return (
        <div>
            <Section>
                <img
                    src={veggiesBanner}
                    className=" absolute top-0 left-0 w-full h-full object-cover object-top -z-10"
                />
                <Container>
                    <div className=" flex flex-col gap-4 items-center mt-24">
                        <h1 className=" text-4xl">The best</h1>
                        <img
                            src="/images/fruits_&_veggies/fruits_&_veggies.svg"
                            className=" sm:w-[800px]"
                        />
                        <h1 className=" text-4xl">Right at your doorsteps</h1>
                        <Link
                            to={"products"}
                            className="bg-gradient-to-r from-emerald-500 to-lime-600 rounded-3xl px-3 text-[18px] py-2 text-white"
                        >
                            Start shopping
                        </Link>
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Home;
