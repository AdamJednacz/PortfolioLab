import React from 'react';
import Header from "./Header";
import Main from "./Main";
import HomeImage from "../assets/Home-Hero-Image.jpg"
import HomeTreeColumns from "./HomeTreeColumns";

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

        </div>
    );
};

export default Home;