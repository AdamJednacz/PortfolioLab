import React from 'react';
import Header from "./Header";
import Decoration from "../assets/Decoration.svg";

const Register = () => {
    return (
        <section className="Register container">
            <Header/>
            <form className="register_form">
                <h1>Sing Up</h1>
                <img src={Decoration} alt="decoration" />

                <div className="label_container">
                    <label className="register_label">
                        Email
                        <input type="email" />
                    </label>


                    <label className="register_label" >
                        Password
                        <input type="password" />
                    </label>

                    <label className="register_label" >
                        Repet Password
                        <input type="password" />
                    </label>
                </div>
                <div className="register_btn_container">
                    <button className="register_btn">Log In</button>
                    <button className="register_btn">Sing Up</button>
                </div>
            </form>


        </section>


    );
};

export default Register;