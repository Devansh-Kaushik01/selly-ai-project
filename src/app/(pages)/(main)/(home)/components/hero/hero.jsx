"use client"
import { IoIosPlayCircle } from "react-icons/io";
import DefaultButton from "../../../../components/defaultButton/defaultButton";
import DropboxImg from "../../../../../../assets/images/dropbox.png"
import SlackImg from "../../../../../../assets/images/slack.png"
import WebflowImg from "../../../../../../assets/images/webflow.png"
import ZoomImg from "../../../../../../assets/images/zoom.png"
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const imgaeData = [
    {
        img: DropboxImg,
    },
    {
        img: SlackImg,
    },
    {
        img: WebflowImg,
    },
    {
        img: ZoomImg,
    },

]

const Hero = () => {
    return (
        <div className="container mx-auto lg:py-20 py-10 flex gap-10 lg:flex-row flex-col-reverse ">
            <div className="flex flex-col gap-10 w-full">
                <div className="flex items-center gap-4 lg:w-[500px] p-2 border-2 border-gray-200 rounded-3xl">
                    <p className="bg-green-50 p-2 font-semibold rounded-full ">New</p>
                    <p className="flex items-center font-medium gap-2">Introducing a new feature in Selly AI version 2.0 <GoArrowUpRight size={28} className="text-blue"/></p>
                </div>
                <h1 className="lg:text-6xl text-3xl font-semibold">Sell more with less using Selly AI</h1>
                <p className="lg:text-lg text-md text-lightgray font-medium">Maximize your business sales potential with AI, which can make
                your way of working more efficient and more effective.
                </p>
                <div className="flex gap-2">
                    <DefaultButton anchor onPress={"/"} classNames={" text-white w-40"} >
                        Start for free
                    </DefaultButton>
                    <DefaultButton anchor onPress={"/"} classNames={"border-2 border-blue !bg-white w-52"} >
                        <IoIosPlayCircle size={26} className="text-blue" /> Watch Product Tour
                    </DefaultButton>
                </div>
                <div className="flex flex-col gap-4 ">
                    <h4 className="text-md font-semibold text-lightgray">Trusted by leading brands</h4>
                    <div className='flex gap-2 '>
                        {imgaeData.map((item, index) => {
                            return (
                                <Image
                                    src={item.img}
                                    key={index}
                                    alt="img"
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="border w-full h-auto">

            </div>
        </div>
    );
};
export default Hero;