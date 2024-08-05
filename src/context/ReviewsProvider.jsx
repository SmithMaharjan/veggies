import React, { createContext, useContext, useState } from "react";
import reviewsData from "../datas/reviews";
const ReviewsContext = createContext();
const ReviewsProvider = ({ children }) => {
    return (
        <div>
            <ReviewsContext.Provider value={{}}>
                {children}
            </ReviewsContext.Provider>
        </div>
    );
};

export default ReviewsProvider;
export const useReviewsContext = () => {
    const context = useContext(ReviewsContext);

    if (!context) {
        throw new Error(
            "useReviewContext must be inside ReviewsContext.Provider"
        );
    }

    return context;
};
