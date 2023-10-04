import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
const Header = () => {
    return (
        <section className="Header">
            <div className="Header_item">

                    <button className="btn"> <RouterLink to="/Login">Login</RouterLink></button>


                    <button className="btn"><RouterLink to="/Register">Register </RouterLink></button>

            </div>
            <div className="Header_item">
                <Link to="elementId" smooth={true} duration={500}>
                    <button className="btn">Start</button>
                </Link>
                <Link to="aboutSection" smooth={true} duration={500}>
                    <button className="btn">What is it about</button>
                </Link>
                <Link to="aboutUsSection" smooth={true} duration={500}>
                    <button className="btn">About us</button>
                </Link>
                <Link to="foundationSection" smooth={true} duration={500}>
                    <button className="btn">Foundation and organizations</button>
                </Link>
                <Link to="contactSection" smooth={true} duration={500}>
                    <button className="btn">Contact</button>
                </Link>
            </div>
        </section>
    );
};

export default Header;
