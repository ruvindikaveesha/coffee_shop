import React from "react";
import Button from "../card/Button";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

const Card = (props) => {
    return (
        <div className=" w-full lg:w-1/4 bg-white p-3 rounded-lg">
            <div className="flex flex-wrap justify-center">
                <div className="w-3/6 sm:w-4/8 px-1">
                    <img src={props.img}
                         alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none"/>
                </div>
            </div>
            <div className=" flex flex-col items-center mt-5 gap-3">
                <h2 className=" font-semibold text-xl">{props.title}</h2>
                <div className=" flex ">
                    <BsStarFill className=" text-brightColor" />
                    <BsStarFill className=" text-brightColor" />
                    <BsStarFill className=" text-brightColor" />
                    <BsStarFill className=" text-brightColor" />
                    <BsStarHalf className=" text-brightColor" />
                </div>
                <h3 className=" font-semibold text-lg" >{props.price}</h3>
                {/*<h3 className=" font-semibold text-lg" >$15.99</h3>*/}
                <Button title="Order Now" />
            </div>
        </div>
    );
};

export default Card;
