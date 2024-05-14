"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../../../assets/logo/logo.png"
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";


const productsList = [
    { link: "/", list: "Overview" },
    { link: "/", list: "Secure Product" },
    { link: "/", list: "Shopify Owner" },
    { link: "/", list: "Secure Payments" },

]
const customersList = [
    { link: "/", list: "Developers" },
    { link: "/", list: "Showcase" },
    { link: "/", list: "Online Store" },
]
const contactsList = [
    { link: "/", icon: <FiPhoneCall size={18} />, list: "+569-231-213" },
    { link: "/", icon: <MdOutlineMailOutline size={18} />, list: "contact@selly.ai" },
    { link: "/", icon: <FaRegMap size={40}/> , list: "4517 Washington Ave. Manchester,Kentucky 39495" },
]
const iconsData = [
    { link: "/", icon: <FaFacebookF size={14} /> },
    { link: "/", icon: <IoLogoTwitter size={14} /> },
    { link: "/", icon: <FaLinkedinIn size={14} /> },
    { link: "/", icon: <FaYoutube size={14} /> },
]

const ContactUs = () => {
    return (
        <div className="container mx-auto grid lg:grid-cols-[30%_auto] justify-between lg:py-20 py-10">
            <div className="flex flex-col gap-6">
                <Link href={"/"} className="flex gap-1 items-center">
                    <Image src={Logo} alt="logo" className="w-5 h-5" />
                    <h3 className="text-2xl font-semibold">Selly AI</h3>
                </Link>
                <p className="lg:text-lg text-sm text-lightgray font-medium">Selly AI is a service provider to
                    facilitate product sales and improve
                    service effectiveness.
                </p>
            </div>
            <div className="flex lg:gap-14 gap-5 lg:pt-0 pt-5">
                <div className="flex flex-col gap-2">
                    <h4 className="mb-2 font-semibold">Product</h4>
                    {productsList.map((item, index) => {
                        return (
                            <Link href={item.link}
                                className="text-lightgray font-medium"
                                key={"pro" + index}>
                                {item.list}
                            </Link>
                        )
                    })
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="mb-2 font-semibold">Customers</h4>
                    {customersList.map((item, index) => {
                        return (
                            <Link href={item.link}
                                className="text-lightgray font-medium"
                                key={"cus" + index}>
                                {item.list}
                            </Link>
                        )
                    })
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="mb-2 font-semibold">Contacts</h4>
                    {contactsList.map((item, index) => {
                        return (
                            <Link href={item.link}
                                className="w-52 flex items-center font-medium gap-3"
                                key={"cons" + index}>
                                {item.icon}
                                <li className="text-lightgray list-none">{item.list}</li>
                            </Link>
                        )
                    })
                    }
                    <div className='flex gap-4 pt-4'>
                        {iconsData.map((item, index) => {
                            return (
                                <Link href={item.link}
                                    key={index}>
                                    <div className="rounded-full p-2 border hover:bg-blue hover:text-white">
                                        {item.icon}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactUs;