import React from 'react';
import Header from "./Header";
import Main from "./Main";
import HomeImage from "../assets/Home-Hero-Image.jpg"
import HomeTreeColumns from "./HomeTreeColumns";
import Simple4Steps from "./Simple4steps";
import AboutUs from "./AboutUs";

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="HomeImage_HeaderMain_container">
                    <div className="HomeImage"></div>
                    <img className="HomeImage" src={HomeImage} alt={"HomeImage"}/>
                    <div className="Header_Main">
                        <Header/>
                        <Main/>
                    </div>
                </div>
            </div>
            <HomeTreeColumns/>
            <Simple4Steps/>
            <AboutUs/>
        </div>
    );
};

export default Home;