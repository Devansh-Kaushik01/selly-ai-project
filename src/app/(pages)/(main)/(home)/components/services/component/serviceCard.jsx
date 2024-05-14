"use client"
import DefaultCheckBox from "../../../../../components/defaultCheckbox/defaultCheckbox"
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { IoFolder } from "react-icons/io5";
import { RiOrganizationChart } from "react-icons/ri";

const businessData = [
    {
        active: true,
        icon: <PiArrowBendDownRightBold size={32}/>,
        heading: "Increase Your business income",
        para: "Sales will increase rapidly by simplifying the sales process."
    },
    {
        icon: <IoFolder size={32}/>,
        heading: "Understand the needs of developers",
        para: "Selly AI was developed to be easy for developers to use."
    },
    {
        icon: <RiOrganizationChart size={32} />,
        heading: "One application for all needs",
        para: `Enough will Selly AI, all your business and sales needs are met.`
    }
]

const ServiceCard = ({ paragraph, classNames, product }) => {
    return (
        <div className={`container mx-auto lg:py-20 py-10 h-auto flex lg:flex-row flex-col-reverse items-center gap-14 ${classNames}`}>
            <div className="flex flex-col gap-6 lg:w-2/4">

                {product ?
                    <div className="lg:text-5xl text-3xl font-semibold flex flex-col gap-3">
                        <h2>Increase your product </h2>
                        <h2>sales with Selly AI</h2>
                    </div>

                    :
                    <div className="lg:text-5xl text-3xl font-semibold flex flex-col gap-3">
                        <h2>Make business </h2>
                        <h2>processes better</h2>
                    </div>
                }

                <p className="text-lg text-lightgray font-medium ">{paragraph}</p>
                {product ?
                    <div className="flex flex-col justify-center gap-4 pt-5 font-medium">
                        <DefaultCheckBox label={'Best selling product track.'} />
                        <DefaultCheckBox label={'Create good traffic for the product.'} />
                        <DefaultCheckBox label={'Analyze any changes in consumer behavior.'} />
                    </div>
                    :
                    <div className="flex flex-col gap-8 pt-4">
                        {
                            businessData.map((item, index) => {
                                return (
                                    <div className="flex gap-8 "
                                        key={index}>
                                            <div className={`${item.active === true ? "bg-black text-white lg:w-10 w-14 h-10 rounded-full" : ""}`}>
                                            {item.icon}
                                            </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="font-semibold text-xl">{item.heading}</h4>
                                            <p className="font-medium text-md text-lightgray">{item.para}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
            <div className="border border-black lg:w-2/4 w-full h-96">

            </div>
        </div>
    );
};
export default ServiceCard;