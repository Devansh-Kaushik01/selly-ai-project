"use client"
import React from "react";
// import {
//     Accordion,
//     AccordionHeader,
//     AccordionBody,
// } from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";

const FaqCard = ({ item }) => { 

    return (
        <>
            <div className="bg-white p-6 rounded-3xl lg:w-[700px]">
                <div className="flex items-center justify-between">
                <div className="text-lg font-medium">{item.heading}</div>
                 <IoIosArrowDown size={20}/>
                </div>
                <div className="font-normal text-lightgray">
                      {item.answer}
                </div>
            </div>
        </>
    );
};
export default FaqCard;