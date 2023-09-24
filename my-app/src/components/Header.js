import React from 'react';

const Header = () => {
    return (
        <section className="Header">
            <div className="Header_item">
                <button className="btn">Login</button>
                <button className="btn">Register</button>
            </div>
            <div className="Header_item">
                <button className="btn">Start</button>
                <button className="btn">What is it about</button>
                <button className="btn">About us</button>
                <button className="btn">Foundation and organizations</button>
                <button className="btn">Contact</button>
            </div>
        </section>
    );
};

export default Header;