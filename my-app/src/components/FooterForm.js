import React from 'react';
import BackgroundContactForm from "../assets/Background-Contact-Form.jpg";
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"
const FooterForm = () => {
    return (
        <section className="footer_form" id="contactSection">
            <div className="footer_form_top">
            <img className="background" src={BackgroundContactForm} alt={"BackgroundContactForm"}/>
                <div className="footer_form_left_side">
                <h1>Contact Us</h1>
                <img src={Decoration} alt={"decoration"}/>
            <form className="form">
                <div className="top_form">
                <label>
                    Enter your name:
                    <input type="text" placeholder="Krzysztof"/>
                </label>
                <label>
                    Enter your e-mail:
                    <input type="text" placeholder="abc@xyz.pl"/>
                </label>
                </div>
                <label>
                    Enter your message:
                    <input className="message" type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                </label>
                <button className="btn">Send</button>
            </form>
                </div>
        </div>
            <footer>
                <p> Copyright by Coders Lab</p>
                <div className="media">
                <img src={Facebook} alt={Facebook}/>
                <img src={Instagram} alt={Instagram}/>
                </div>
            </footer>
        </section>
    );
};

export default FooterForm;