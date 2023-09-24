import React from 'react';
import Decoration from "../assets/Decoration.svg"
const Main = () => {
    return (
        <section className="Main">
            <h1>Start helping!</h1>
            <h2>Put unwanted things in trusted hands</h2>
            <img src={Decoration} alt={"decoration"}/>
            <div className="main_btn_container">
                <button className="btn">GIVE YOUR ITEMS</button>
                <button className="btn">ORGANIZE A COLLECTION</button>
            </div>
        </section>
    );
};

export default Main;