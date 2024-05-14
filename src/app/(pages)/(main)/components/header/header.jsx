"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../../../assets/logo/logo.png"
import { useEffect, useState, Fragment } from "react";
import DefaultButton from "../../../components/defaultButton/defaultButton"

const menuItems = [
    { name: "Solution", link: "/solution" },
    { name: "Product", link: "/product" },
    { name: "About", link: "/about" },
    { name: "Partners", link: "/partners" },
    { name: "Resources", link: "/resources" },
]

const Header = ({ }) => {
    const [current, setCurrent] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        setCurrent(pathname);
    }, [pathname]);

    return (
        <Fragment>
            <div className="w-full lg:bg-indigo-950 py-2 ">
                <div className='container mx-auto lg:flex hidden justify-center text-white'>
                    <h4 className="text-xs font-normal underline underline-offset-2 ">
                        Selly AL has just recived series A funding from investors
                    </h4>
                </div>
            </div>
            <div className="container p-4 mx-auto flex justify-between items-center py-2">
                <Link href={"/"} className="flex gap-1 items-center">
                    <Image src={Logo} alt="logo" className="w-10 h-10" />
                    <h3 className="text-lg font-semibold">Selly AI</h3>
                </Link>
                <div className="hidden md:flex gap-6 items-center justify-center ml-40">
                    {
                        menuItems.map((item, index) => {
                            return (
                                <Link href={item.link}
                                    className={current === item.link ? "font-bold" : "font-normal"}
                                    key={index}>
                                    {item.name}
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="flex gap-2">
                    <DefaultButton anchor onPress={"/"} classNames={"bg-white"} >
                        Sign In
                    </DefaultButton>
                    <DefaultButton anchor onPress={"/"} classNames={"border-2 bg-white border-blue"} >
                        Get Started
                    </DefaultButton>
                </div>
            </div>
        </Fragment>
    );
};
export default Header;