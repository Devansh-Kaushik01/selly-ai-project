"use client"

import Image from "next/image";

const ImagesCard = ({img , heading , classNames , paragraph}) => {
    return (
        <div className={`border-2 rounded-full lg:w-56 lg:p-2 p-1 lg:px-4 px-2 flex items-center gap-2 absolute bg-green-50 ${classNames}`}>
                    <Image
                        src={img}
                        alt="img"
                        className="lg:w-14 w-8 bg-white lg:p-2 p-1 rounded-full"
                    />
                    <div>
                        <h4 className="font-bold lg:text-lg text-sm">{heading}</h4>
                        <p className="lg:text-md text-xs">{paragraph}</p>
                    </div>
                </div>
    );
};
export default ImagesCard;