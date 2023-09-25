import React from 'react';
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg"
import People from "../assets/People.jpg"
const AboutUs = () => {
    return (
        <section className="about_us">
            <div className="about_us_items">
                <h1 className="about_us_item">About Us</h1>
                <img className="about_us_item" src={Decoration} alt={"decoration"}/>
                <p className="about_us_item">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="about_us_item" src={Signature} alt={"signature"} />
            </div>
            <img src={People} alt={"People"}/>
        </section>
    );
};

export default AboutUs;