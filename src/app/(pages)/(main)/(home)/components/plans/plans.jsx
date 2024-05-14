"use client"
import Image from "next/image";
import DefaultButton from "../../../../components/defaultButton/defaultButton"
import PlansImg from "../../../../../../assets/images/plans.png"

const Plans = () => {
    return (
        <div className="bg-black text-white pt-20 ">
            <div className="container mx-auto flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-4 text-center">
                <h2 className="lg:text-5xl text-3xl font-semibold">Unbeatable solution for</h2>
                <h2 className="lg:text-5xl text-3xl font-semibold">your business</h2>
                <p className="lg:text-lg text-[#757677] font-medium">7 day free trial. No credit required. Real-time insights</p>
            </div>
            <DefaultButton anchor onPress={"/"} classNames={"text-white w-44"} >
                Start for free
            </DefaultButton>
            <div>
                <Image
                src={PlansImg}
                alt="PlansImg"
                />
            </div>
            </div>
        </div>
    );
};
export default Plans