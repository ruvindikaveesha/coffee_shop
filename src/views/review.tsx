import React from "react";
import ReviewCard from "../components/card/reviewcard";
import img1 from "/src/assets/pic1.png";
import img2 from "/src/assets/pic2.png";
import img3 from "/src/assets/pic1.png";

const Review = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-orange-100  ">
            <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 font-bold text-amber-950 italic ">
                Customer's Reviews
            </h1>

            <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
                <ReviewCard img={img1} title="Ruvindi Kaveesha" />
                <ReviewCard img={img2} title="Tharu Silva" />
                <ReviewCard img={img3} title="Sofia Zoe" />
            </div>
        </div>
    );
};

export default Review;
