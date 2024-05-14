"use client"
import Image from "next/image";
import ImagesCard from "./component/imagesCard"
import IntegrationImg from "../../../../../../assets/images/integration.jpg"
import ShopifyLogo from "../../../../../../assets/logo/shopify.jpg"
import ZendeskLogo from "../../../../../../assets/logo/zendesk.png"
import SkypeLogo from "../../../../../../assets/logo/skype.png"
import MicrosoftLogo from "../../../../../../assets/logo/microsoft.png"
import AsanaLogo from "../../../../../../assets/logo/asana.png"
import ZapierLogo from "../../../../../../assets/logo/zapier.png"

const Integration = () => {
    const data = [
        {
            class: "lg:top-12 top-1 lg:-left-2 -left-12",
            img: ShopifyLogo,
            heading: "Shopify",
            paragraph: "Online Store",
        },
        {
            class: "lg:top-[215px] top-14 lg:-left-28 -left-16",
            img: ZendeskLogo,
            heading: "Zendesk",
            paragraph: "CRM",
        },
        {
            class: "lg:bottom-16 bottom-4 lg:-left-2 -left-[64px]",
            img: SkypeLogo,
            heading: "Skype",
            paragraph: "Communication",
        },
        {
            class: "lg:top-10 top-2 lg:-right-8 -right-20",
            img: MicrosoftLogo,
            heading: "Ms. Team",
            paragraph: "Communication",
        },
        {
            class: "lg:top-56 top-[60px] lg:-right-36 -right-20",
            img: AsanaLogo,
            heading: "Asana",
            paragraph: "Managment",
        },
        {
            class: "lg:bottom-20 bottom-3 lg:-right-8 -right-14",
            img: ZapierLogo,
            heading: "Zapier",
            paragraph: "Automation",
        },
    ]
    return (
        <div className="container mx-auto lg:py-20 py-10 flex flex-col justify-center items-center gap-6 ">
            <div className="lg:text-5xl text-3xl text-center font-semibold flex flex-col gap-2">
                <h2>Powerful application with</h2>
                <h2>seamless integration</h2>
            </div>
            <p className="lg:text-lg text-lightgray font-medium">Integrate Selly AI with your favorite apps</p>
            <div className="relative p-6">
                <Image
                    src={IntegrationImg}
                    alt="IntegrationImg"
                    className="lg:w-[800px] w-[200px] object-cover "
                />
                {data.map((d, index) =>
                 <ImagesCard
                    key={"im-" + index}
                    classNames={d.class}
                    img={d.img}
                    heading={d.heading}
                    paragraph={d.paragraph}
                />)}
            </div>
        </div>
    );
};
export default Integration;