"use client"
import Image from "next/image";

const AboutCard = ({ item }) => {
    return (
        <div className='bg-white p-10 rounded-3xl'>
                <div className="w-full h-44 flex flex-col gap-2">
                    <Image
                        src={item.img}
                        alt="img"
                        className="w-14 h-14 bg-green-50 rounded-lg p-2"
                    />
                    <h4 className="text-2xl font-bold">{item.heading}</h4>
                    <p className="text-md text-lightgray font-medium">{item.paragraph}</p>
                </div>
        </div>
    );
};
export default AboutCard;