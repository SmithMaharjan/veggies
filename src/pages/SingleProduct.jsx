import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import initialProducts from "../datas/product";
import AddToCartButton from "../components/AddToCartButton";
import Reviews from "../components/Reviews";
import { RiStarSLine } from "react-icons/ri";
import PopUp from "../components/PopUp";
import useClickOutside from "../hooks/useClickOutside";
import useToggle from "../hooks/useToggle";

const SingleProduct = () => {
    const params = useParams();
    const ProductId = params["id"];
    const singleProducts = initialProducts.find((f) => f.id == ProductId);
    const allowedPopUp = useRef();
    const {
        open: openPopUp,
        close: closePopUp,
        toggle: togglePopUp,
        isOpen: isOpenPopUp,
    } = useToggle(false);
    console.log(singleProducts);
    return (
        <>
            <Container>
                <div className=" ">
                    <PopUp
                        isOpenPopUp={isOpenPopUp}
                        allowedPopUp={allowedPopUp}
                        closePopUp={closePopUp}
                    />

                    <div className=" flex gap-8 mt-28 ">
                        <img
                            src={singleProducts.imageUrl}
                            className=" w-[37%] border border-gray-200 rounded-lg"
                        />
                        <div>
                            <h1 className=" text-3xl">{singleProducts.name}</h1>
                            <div
                                onClick={openPopUp}
                                ref={allowedPopUp}
                                className="flex text-2xl"
                            >
                                {" "}
                                {Array(5)
                                    .fill(null)
                                    .map((star) => (
                                        <RiStarSLine />
                                    ))}
                            </div>

                            <p className=" text-[18px]">{`Rs:${singleProducts.price}/${singleProducts.unitOfSale}`}</p>
                            <p className=" pt-3">
                                {singleProducts.productDescription}
                            </p>
                            <AddToCartButton product={singleProducts} />
                        </div>
                    </div>
                    <Reviews ProductId={ProductId} />
                </div>
            </Container>
        </>
    );
};

export default SingleProduct;
