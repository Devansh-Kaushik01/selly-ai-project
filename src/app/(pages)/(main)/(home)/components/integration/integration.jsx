"use client"
import Image from "next/image";
import ImagesCard from "./component/imagesCard"
import IntegrationImg from "../../../../../../assets/images/integration.png"
import ShopifyLogo from "../../../../../../assets/logo/shopify.jpg"
import ZendeskLogo from "../../../../../../assets/logo/zendesk.png"
import SkypeLogo from "../../../../../../assets/logo/skype.png"
import MicrosoftLogo from "../../../../../../assets/logo/microsoft.png"
import AsanaLogo from "../../../../../../assets/logo/asana.png"
import ZapierLogo from "../../../../../../assets/logo/zapier.png"

const Integration = () => {
    const data = [
        {
            class: "top-4 -left-20",
            img: ShopifyLogo,
            heading: "Shopify",
            paragraph: "Online Store",
        },
        {
            class: "top-52 -left-52",
            img: ZendeskLogo,
            heading: "Zendesk",
            paragraph: "CRM",
        },
        {
            class: "bottom-4 -left-20",
            img: SkypeLogo,
            heading: "Skype",
            paragraph: "Communication",
        },
        {
            class: "top-4 -right-14",
            img: MicrosoftLogo,
            heading: "Ms. Team",
            paragraph: "Communication",
        },
        {
            class: "top-52 -right-52",
            img: AsanaLogo,
            heading: "Asana",
            paragraph: "Managment",
        },
        {
            class: "bottom-4 -right-14",
            img: ZapierLogo,
            heading: "Zapier",
            paragraph: "Automation",
        },
    ]
    return (
        <div className="container mx-auto py-20 flex flex-col items-center gap-6 ">
            <div className="text-5xl font-semibold flex flex-col items-center gap-2">
                <h2>Powerful application with</h2>
                <h2>seamless integration</h2>
            </div>
            <p className="text-lg text-lightgray font-medium">Integrate Selly AI with your favorite apps</p>
            <div className="relative">
                <Image
                    src={IntegrationImg}
                    alt="IntegrationImg"
                    className="w-[800px] object-cover "
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