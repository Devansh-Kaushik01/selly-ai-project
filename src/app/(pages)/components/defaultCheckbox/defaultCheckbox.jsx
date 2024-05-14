"use client"
import { FaCheck } from "react-icons/fa6";
import {useState} from 'react';

const DefaultCheckBox = ({label, id, classNames}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
        ;
    };

    return (
        <div
            className={`inline-flex items-center cursor-pointer gap-2 ${classNames ? classNames : ''}`}
            onClick={handleCheckboxChange}
        >
            <div className={`w-6 h-6 rounded-full p-[1px] border`}>
                {isChecked ?
                    <div className={"w-full h-full rounded-full bg-blue text-white flex justify-center items-center"}>
                        {id}
                    </div>
                    :
                    <div className={"w-full h-full rounded-full bg-white text-black flex justify-center items-center"}>
                        {id}
                    </div>
                }
            </div>
            {label}
        </div>
    );
}

export default DefaultCheckBox;