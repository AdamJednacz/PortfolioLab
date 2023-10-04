import React from 'react';
import { Link } from 'react-router-dom';
import Decoration from "../assets/Decoration.svg";
import {isLoggedIn} from "../App";
const Main = () => {


    return (
        <section className="Main">
            <h1>Start helping!</h1>
            <h2>Put unwanted things in trusted hands</h2>
            <img src={Decoration} alt="decoration" />
            <div className="main_btn_container">
                {isLoggedIn ? (
                    <>
                        <button className="btn">GIVE YOUR ITEMS</button>
                        <button className="btn">ORGANIZE A COLLECTION</button>
                    </>
                ) : (
                    <>
                        <Link to="/Login">
                            <button className="btn">GIVE YOUR ITEMS</button>
                        </Link>
                        <Link to="/Login">
                            <button className="btn">ORGANIZE A COLLECTION</button>
                        </Link>
                    </>
                )}
            </div>
        </section>
    );
};

export default Main;
