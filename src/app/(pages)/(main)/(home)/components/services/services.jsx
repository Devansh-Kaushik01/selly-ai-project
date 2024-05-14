"use client"
import ServiceCard from "./component/serviceCard";

const Services = () => {
    return (
        <div>
            <ServiceCard
                paragraph={`With the power of AI, the process of selling products to the hands of 
                        consumers is very easy. Do it with just a few steps.`}
                product={true}
            />
            <ServiceCard
                classNames={"flex flex-row-reverse"}
                product={false}
            />
        </div>
    );
};
export default Services;