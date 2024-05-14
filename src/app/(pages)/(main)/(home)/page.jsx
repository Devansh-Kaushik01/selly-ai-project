"use client"
import { Fragment } from "react";
import Hero from "./components/hero/hero";
import Business from "./components/business/business";
import Services from "./components/services/services"
import Integration from "./components/integration/integration";
import Faq from "./components/faq/faq";
import Plans from "./components/plans/plans";
import ContactUs from "./components/contact-us/contactUs"


const Home = () => {
    return (
        <Fragment>
            <Hero />
            <Business/>
            <Services/>
            <Integration/>
            <Faq/>
            <Plans/>
            <ContactUs/>
        </Fragment>
    );
};
export default Home