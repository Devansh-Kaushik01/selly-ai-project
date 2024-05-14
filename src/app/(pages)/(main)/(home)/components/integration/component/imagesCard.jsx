"use client"

import Image from "next/image";

const ImagesCard = ({img , heading , classNames , paragraph}) => {
    return (
        <div className={`border-2 rounded-full w-56 p-2 px-4 flex items-center gap-2 absolute bg-green-50 ${classNames}`}>
                    <Image
                        src={img}
                        alt="img"
                        className="w-14 bg-white p-2 rounded-full"
                    />
                    <div>
                        <h4 className="font-bold text-lg">{heading}</h4>
                        <p className="">{paragraph}</p>
                    </div>
                </div>
    );
};
export default ImagesCard;