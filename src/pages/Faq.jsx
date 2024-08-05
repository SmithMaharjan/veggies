import React, { useState } from "react";
import Container from "../components/Container";
import faq from "../datas/faq";
import { v4 as uuidv4 } from "uuid";
import Accordian from "../components/Accordian";

const Faq = () => {
    const [itemsWithOpenState, setItemsWithOpenState] = useState(
        faq.map((singleFaq) => {
            return { ...singleFaq, id: uuidv4(), open: false };
        })
    );
    console.log(itemsWithOpenState);
    return (
        <>
            <div className=" bg-gray-200 h-full">
                <Container>
                    <div className="mt-14">
                        <h1 className=" text-2xl text-green-800">
                            Frequently Asked Question
                        </h1>
                        <p className=" text-[19px] text-gray-500">
                            Some of the most frequent asked question
                        </p>
                        <div className="mt-7">
                            {itemsWithOpenState.map((item) => (
                                <Accordian
                                    item={item}
                                    itemsWithOpenState={itemsWithOpenState}
                                    setItemsWithOpenState={
                                        setItemsWithOpenState
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Faq;
