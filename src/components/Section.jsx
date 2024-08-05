import React from "react";

const Section = (props) => {
    const { children } = props;
    return <div className=" m-auto p-3 w-[85%]">{children}</div>;
};

export default Section;
