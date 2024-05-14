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
        <div className="container mx-auto py-20 flex border">
            <div className="flex flex-col gap-10 w-2/4">
                <div className="flex items-center gap-4 w-[500px] p-2 border-2 border-gray-200 rounded-3xl">
                    <p className="bg-green-50 p-2 font-semibold rounded-full ">New</p>
                    <p className="flex items-center font-medium gap-2">Introducing a new feature in Selly AI version 2.0 <GoArrowUpRight size={28} className="text-blue"/></p>
                </div>
                <h1 className="text-6xl font-semibold">Sell more with less using Selly AI</h1>
                <p className="text-lg text-lightgray font-medium">Maximize your business sales potential with
                    AI, which can make your way of working
                    more efficient and more effective.
                </p>
                <div className="flex gap-2">
                    <DefaultButton anchor onPress={"/"} classNames={" text-white w-40"} >
                        Start for free
                    </DefaultButton>
                    <DefaultButton anchor onPress={"/"} classNames={"border-2 border-blue !bg-white w-52"} >
                        <IoIosPlayCircle size={26} className="text-blue" /> Watch Product Tour
                    </DefaultButton>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-md font-semibold text-lightgray">Trusted by leading brands</h4>
                    <div className='flex gap-5'>
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
            <div className="border w-[00px] h-60">

            </div>
        </div>
    );
};
export default Hero;