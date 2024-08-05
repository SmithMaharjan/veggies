import React, { useContext, useState } from "react";
import Section from "./Section";
import reviewsData from "../datas/reviews";
import clsx from "clsx";

const Reviews = (props) => {
    const { ProductId } = props;
    const [reviews, setReviews] = useState(reviewsData);
    const [likedId, setLikedId] = useState([]);
    const likedReview = (reviewId) => {
        setLikedId((oldLikedId) => {
            if (!oldLikedId.includes(reviewId)) {
                return [...oldLikedId, reviewId];
            } else {
                return likedId.filter((f) => f != reviewId);
            }
        });
    };

    const productReviews = reviews.filter((f) => f.productId == ProductId);
    return (
        <div>
            <Section>
                <h1>Reviews</h1>
                {productReviews.map((productReview) => {
                    return (
                        <div className=" w-full h-32 border border-gray-200 rounded-2xl p-3 shadow-lg relative">
                            <div className="text-gray-600">
                                {productReview.review}
                            </div>
                            <div className="flex absolute bottom-3 right-4 gap-3">
                                <p className="text-gray-500">
                                    was this review helpful?
                                </p>
                                <div
                                    className={clsx(
                                        "flex border border-gray-300 rounded-3xl gap-3 px-3 py-1 ",
                                        likedId.includes(productReview.id)
                                            ? "text-green-500"
                                            : ""
                                    )}
                                >
                                    <button
                                        onClick={() => {
                                            likedReview(productReview.id);
                                        }}
                                    >
                                        Like
                                    </button>{" "}
                                    <p>{productReview.likeCount}</p>
                                </div>
                                <button>dislike</button>
                            </div>
                        </div>
                    );
                })}
            </Section>
        </div>
    );
};

export default Reviews;
