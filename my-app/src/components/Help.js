import React from 'react';
import Decoration from "../assets/Decoration.svg";

const Help = () => {
    return (
        <section className="help">
            <div className="top">
            <h1>Who do we help?</h1>
            <img src={Decoration} alt={"decoration"}/>
            <div className="h2_help_container">
                <h2>Foundations</h2>
                <h2>Non-governmental organizations</h2>
                <h2>Local collections</h2>

            </div>
            <p>In our database you will find a list of verified Foundations with which we cooperate. You can check what
            they do, who they help and what they need.</p>
            </div>

            <div className="examples">
                <div className="example">
                    <div className="left_side">
                        <h3>“I care for my health” Foundation</h3>
                        <p>Goal and mission: Helping people in difficult life situations.</p>
                    </div>
                    <p>clothes, food, household appliances, furniture, toys</p>
                </div>
                <div className="example">
                    <div className="left_side">
                        <h3>"For Children" Foundation</h3>
                        <p>Goal and mission: Helping children from poor families.</p>
                    </div>
                    <p>clothes, furniture, toys</p>
                </div>
                <div className="example">
                    <div className="left_side">
                        <h3>“Without Home” Foundation</h3>
                        <p>Goal and mission: Help for people without a place of residence.</p>
                    </div>
                    <p>clothes, food, warm blankets</p>
                </div>

            </div>
            <div className="carousel_numbers">
                <div className="number">1</div>
                <div className="number">2</div>
                <div className="number">3</div>
            </div>
        </section>
    );
};

export default Help;