"use client"
import DefaultButton from "../../../../components/defaultButton/defaultButton";
import FaqCard from "./components/faqCard";

const questionsdata = [
    {
        heading: `Is there a free trial available?`,
        answer: ``
    },
    {
        heading: `Is there a guarantee of increased sales?`,
        answer: ``
    },
    {
        heading: `Will the product continue to be developed?`,
        answer: ``
    },
    {
        heading: `What is the difference between Selly AI and competitors?`,
        answer: ``
    }
]

const Faq = () => {
    return (
        <div className="w-full h-auto bg-violet-50">
            <div className="container mx-auto lg:py-20 py-10 flex lg:flex-row flex-col gap-10">
                <div className="flex flex-col gap-6 w-11/12">
                    <h2 className="lg:text-5xl text-3xl font-semibold">Frequently Asked Questions</h2>
                    <p className="lg:text-lg text-lightgray">See all your list of questions here. We will be
                    very happy to help you. </p>
                    <DefaultButton anchor onPress={"/"} classNames={"text-white w-44"} >
                        Check more FAQ
                    </DefaultButton>
                </div>
                <div className='grid gap-4 '>
                {questionsdata.map((item, index) => {
                    return (
                        <FaqCard
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>
            </div>
        </div>
    );
};
export default Faq;