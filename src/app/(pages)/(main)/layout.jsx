"use client"
import Header from "./components/header/header";
import Footer from "./components/footer/footer"

const mainLayout = (props) =>{
    return(
        <div>
            <Header/>
             {props.children}
             <Footer/>
        </div>
    );
};

export default mainLayout;