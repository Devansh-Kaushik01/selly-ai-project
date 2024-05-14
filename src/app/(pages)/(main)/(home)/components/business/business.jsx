"use client"
import BusinessCard from "./component/businessCard"
import IntegrationIcon from "../../../../../../assets/icons/integration.png"
import DataIcon from "../../../../../../assets/icons/data.png"
import SecurityIcon from "../../../../../../assets/icons/security.png"
import ApiIcon from "../../../../../../assets/icons/api.png"
import OfficeImg from "../../../../../../assets/images/office.avif"
import DefaultCheckBox from "@/app/(pages)/components/defaultCheckbox/defaultCheckbox"
import Image from "next/image"

const Data = [
    {
        img: IntegrationIcon, heading: "Seamless Integration",
        paragraph: "Selly AI's integration with leading applications is seamless and hassle-free.",

    },
    {
        img: SecurityIcon, heading: "Secure Data",
        paragraph: "By using multiple layers of security and blockchain technology, Selly AI is definitely safe.",
    }
]
const Data2 = [
    {
        img: DataIcon, heading: "Secure Data",
        paragraph: "All your stored data is guaranteed to be safe from sharing cyber attacks, you don't need to worry.",
    },
    {
        img: ApiIcon, heading: "Powerfull API",
        paragraph: "Use Selly AI's API to make your existing applications more powerful than before ",
    }
]
const Business = ({ }) => {
    return (
        <div className="w-full h-auto bg-violet-50">
            <div className="container mx-auto flex flex-col gap-6 py-20">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-5xl font-semibold">Make business grow quickly</h2>
                    <p className="text-lg text-lightgray">Selly AI has many powerful features to make you work less and achieve more, try it now</p>
                </div>
                <div className="grid grid-cols-3 gap-10 py-10">
                    {/* {Data.map((item, index) => {
                        return (
                            <BusinessCard
                                key={index}
                                item={item}
                            />
                        )
                    })} */}
                    <div className="flex flex-col gap-10">
                        {Data.map((item, index) => {
                            return (
                                <BusinessCard
                                    key={index}
                                    item={item}
                                />
                            )
                        })}
                    </div>
                    <div className=" w-full h-auto bg-white p-6 rounded-3xl flex flex-col items-center gap-2" >
                        <h4 className="text-2xl font-bold pt-2">Increase Exponentially</h4>
                        <p className="text-md text-lightgray pb-4 font-medium">Linear product growth is the norm, it's time
                            to make your product growth exponential.</p>
                        <Image
                            src={OfficeImg}
                            alt="img"
                            className="rounded-3xl "
                        />
                        <div className="flex flex-col justify-center text-lightgray gap-2 mt-4 pt-5 border-t font-medium">
                            <DefaultCheckBox label={'Build relationships with customers'} />
                            <DefaultCheckBox label={'Develop products faster'} />
                            <DefaultCheckBox label={'Continuous development with efficient time'} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        {Data2.map((item, index) => {
                            return (
                                <BusinessCard
                                    key={index}
                                    item={item}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Business;