"use client"
import Link from "next/link"

const DefaultButton = ({ anchor, onPress, children, classNames }) => {
    return (
        anchor ?
            <Link href={onPress}
                className={`font-semibold bg-blue rounded-xl flex justify-center items-center h-14 w-32 text-nowrap ${classNames}`}
            >
                {children}
            </Link>
            :
            <button type="button"
                onClick={onPress}
                className={`rounded-xl bg-blue h-14 w-32 font-semibold text-nowrap text-md ${classNames}`}
            >
              {children}
            </button>
    );
};
export default DefaultButton;