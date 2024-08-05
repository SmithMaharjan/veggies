import React, { useEffect, useRef, useState } from "react";

const Accordian = (props) => {
    const { item, setItemsWithOpenState, itemsWithOpenState } = props;
    const [height, setHeight] = useState();

    const questionRef = useRef();
    const paragraphRef = useRef();
    console.log(setItemsWithOpenState.open);

    const toggleAccordion = (AccordianId) => {
        const toggle = itemsWithOpenState.map((PrevItems) => {
            if (PrevItems.id == AccordianId) {
                return { ...PrevItems, open: !PrevItems.open };
            } else {
                return { ...PrevItems, open: false };
            }
        });
        setItemsWithOpenState(toggle);
    };
    useEffect(() => {
        if (questionRef.current && paragraphRef.current) {
            setHeight(() => {
                if (!item.open) {
                    return questionRef.current.clientHeight;
                } else {
                    return (
                        questionRef.current.clientHeight +
                        paragraphRef.current.clientHeight
                    );
                }
            });
        }
    }, [item.open]);

    return (
        <div className="border border-gray-200 rounded-xl bg-white p-4">
            <div
                className=" overflow-hidden cursor-pointer  transition-all "
                style={{ height: height }}
                onClick={() => {
                    toggleAccordion(item.id);
                }}
            >
                <p className=" text-[19px] text-gray-600" ref={questionRef}>
                    {item.question}
                </p>
                <p className="text-[19px] text-gray-600  " ref={paragraphRef}>
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

export default Accordian;
