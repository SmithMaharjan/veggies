import clsx from "clsx";
import React, { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

const PopUp = (props) => {
    const { allowedPopUp, isOpenPopUp, closePopUp } = props;

    const MainPopUpRef = useRef();
    const ContentPopUpRef = useRef();
    useClickOutside(MainPopUpRef, ContentPopUpRef, allowedPopUp, closePopUp);
    console.log(isOpenPopUp);

    return (
        <div>
            <div
                ref={MainPopUpRef}
                className={clsx(
                    "top-[17%] left-0 absolute h-full w-full",
                    isOpenPopUp ? "visible opacity-100" : "invisible opacity-0"
                )}
            >
                <div
                    ref={ContentPopUpRef}
                    className={clsx(
                        "top-[20%] left-[40%] absolute border border-gray-400 rounded-xl bg-white h-52 w-96",
                        isOpenPopUp
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                    )}
                ></div>
            </div>
        </div>
    );
};

export default PopUp;
