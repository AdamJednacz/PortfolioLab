import React from 'react';
import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg"
import Icon2 from "../assets/Icon-2.svg"
import Icon3 from "../assets/Icon-3.svg"
import Icon4 from "../assets/Icon-4.svg"

const Simple4Steps = () => {
    return (
        <section className="_4steps">
            <div className="_4steps_items_container">
                <h1>Just 4 simple steps</h1>
                <img src={Decoration} alt={"decoration"}/>
            </div>
            <div className="_4steps_icons_container">
                <div className="_4steps_icons">
                    <img className="_4steps_icons_item" src={Icon1} alt={"Icon1"}/>
                    <h2 className="_4steps_icons_item" >Choose things</h2>
                    <div className="line _4steps_icons_item "></div>
                    <p className="_4steps_icons_item" >clothes,toys,equipment and other</p>
                </div>
                <div className="_4steps_icons">
                    <img className="_4steps_icons_item" src={Icon2} alt={"Icon2"}/>
                    <h2 className="_4steps_icons_item">Pack them up</h2>
                    <div className="line _4steps_icons_item"></div>
                    <p className="_4steps_icons_item">use garbage bags</p>
                </div>
                <div className="_4steps_icons">
                    <img className="_4steps_icons_item" src={Icon3} alt={"Icon3"}/>
                    <h2 className="_4steps_icons_item">Decide who you want to help</h2>
                    <div className="line _4steps_icons_item"></div>
                    <p className="_4steps_icons_item">choose a trusted place</p>
                </div>
                <div className="_4steps_icons">
                    <img className="_4steps_icons_item" src={Icon4} alt={"Icon4"}/>
                    <h2 className="_4steps_icons_item">Order a courier</h2>
                    <div className="line _4steps_icons_item"></div>
                    <p className="_4steps_icons_item">the courier will arrive at a convenient time</p>
                </div>
            </div>
            <button className="btn">GIVE YOUR ITEMS</button>
        </section>
    );
};

export default Simple4Steps;