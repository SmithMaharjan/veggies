import clsx from "clsx";
import React from "react";

const Container = (props) => {
    const { children, navbar } = props;
    return (
        <div
            className={clsx(
                "m-auto w-[86%] max-w-7xl",
                navbar === "navbar" ? " flex items-center pt-4 " : ""
            )}
        >
            {children}
        </div>
    );
};

export default Container;
