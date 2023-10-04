import React, {useState} from 'react';
import Decoration from "../assets/Decoration.svg";

const Help = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (index) =>{
        setActiveTab(index);


    }


    return (
        <section className="help" id="foundationSection">
            <div className="top">
            <h1>Who do we help?</h1>
            <img src={Decoration} alt={"decoration"}/>
            <div className="h2_help_container">
                <h2 onClick={() => handleChange(0)} style={{border: activeTab === 0 ? ' 1px solid #707070':'none'}}>Foundations</h2>
                <h2 onClick={() => handleChange(1)} style={{border: activeTab === 1 ? ' 1px solid #707070':'none'}}>Non-governmental organizations</h2>
                <h2 onClick={() => handleChange(2)} style={{border: activeTab === 2 ? ' 1px solid #707070':'none'}}>Local collections</h2>

            </div>
            <p style={{display: activeTab === 0 ? 'block':'none'}}>In our database you will find a list of verified Foundations with which we cooperate. You can check what
            they do, who they help and what they need.</p>
            </div>

            <div className="examples" style={{display: activeTab === 0 ? 'block':'none'}}>
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



            <div className="top">

                <p style={{display: activeTab === 1 ? 'block':'none'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>

            <div className="examples" style={{display: activeTab === 1 ? 'block':'none'}}>
                <div className="example">
                    <div className="left_side">
                        <h3>Organizacja “Lorem Ipsum 1”</h3>
                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    </div>
                    <p>Egestas, sed, tempus</p>
                </div>
                <div className="example">
                    <div className="left_side">
                        <h3>Organizacja “Lorem Ipsum 2”</h3>
                        <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                    </div>
                    <p>Ut, aliquam, purus, sit, amet</p>
                </div>
                <div className="example">
                    <div className="left_side">
                        <h3>Organizacja “Lorem Ipsum 3”</h3>
                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    <p>Mi, quis, hendrerit, dolor</p>
                </div>
            </div>

            <div className="top">

                <p style={{display: activeTab === 2 ? 'block':'none'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>

            <div className="examples" style={{display: activeTab === 2 ? 'block':'none'}}>
                <div className="example">
                    <div className="left_side">
                        <h3>Zbiórka “Lorem Ipsum 1”</h3>
                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    </div>
                    <p>Egestas, sed, tempus</p>
                </div>
                <div className="example">
                    <div className="left_side">
                        <h3>Zbiórka “Lorem Ipsum 2”</h3>
                        <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                    </div>
                    <p>Ut, aliquam, purus, sit, amet</p>
                </div>
                <div className="example">
                    <div className="left_side">
                        <h3>Zbiórka “Lorem Ipsum 3”</h3>
                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    <p>Mi, quis, hendrerit, dolor</p>
                </div>
            </div>

            <div className="carousel_numbers">
                <div onClick={() => handleChange(0)} style={{border: activeTab === 0 ? '1px solid #707070':'none'}} className="number">1</div>
                <div onClick={() => handleChange(1)} style={{border: activeTab === 1 ? '1px solid #707070':'none'}} className="number">2</div>
                <div onClick={() => handleChange(2)} style={{border: activeTab === 2 ? ' 1px solid #707070':'none'}} className="number">3</div>
            </div>
        </section>
    );
};

export default Help;