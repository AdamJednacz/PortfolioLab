import React from 'react';
import Header from "./Header";
import Decoration from "../assets/Decoration.svg";

const Login = () => {
    return (
        <section className="Login container">
        <Header/>
         <form className="login_form">
             <h1>Log In</h1>
             <img src={Decoration} alt="decoration" />

             <div className="label_container">
             <label className="login_label">
                 Email
                 <input type="email" />
             </label>


             <label className="login_label" >
                 Password
                 <input type="password" />
             </label>
             </div>
             <div className="login_btn_container">
             <button className="login_btn">Sing Up</button>
             <button className="login_btn">Log In</button>
             </div>
         </form>


        </section>


    );
};

export default Login;