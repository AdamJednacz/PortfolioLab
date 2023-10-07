import React, { useState } from 'react';
import BackgroundContactForm from "../assets/Background-Contact-Form.jpg";
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import { createRoot } from 'react-dom/client';

const FooterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);

    // Funkcja obsługująca zmiany w polach formularza
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };


        // Walidacja wiadomości
        if (formData.message.length < 120) {
            newErrors.message = "Wiadomość musi mieć co najmniej 120 znaków";
            isValid = false;
        } else {
            newErrors.message = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    // Funkcja do obsługi wysyłki formularza
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Dane formularza są poprawne, wysyłamy je na endpoint API
            try {
                const response = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                if (response.status === 200) {
                    setSubmissionStatus("success");
                } else {
                    const responseData = await response.json();
                    setSubmissionStatus(responseData.errors || "Wystąpił błąd");
                }
            } catch (error) {
                console.error(error);
                setSubmissionStatus("Wystąpił błąd");
            }
        }
    };

    return (
        <section className="footer_form" id="contactSection">
            <div className="footer_form_top">
                <img className="background" src={BackgroundContactForm} alt={"BackgroundContactForm"} />
                <div className="footer_form_left_side">
                    <h1>Contact Us</h1>
                    <img src={Decoration} alt={"decoration"} />
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="top_form">
                            <label>
                                Enter your name:
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Krzysztof"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </label>
                            {errors.name && <p className="error-message">{errors.name}</p>}
                            <label>
                                Enter your e-mail:
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="abc@xyz.pl"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </label>
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        <label>
                            Enter your message:
                            <input
                                className="message"
                                type="text"
                                name="message"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </label>
                        {errors.message && <p className="error-message">{errors.message}</p>}
                        <button className="btn" type="submit">Send</button>
                    </form>
                </div>
            </div>
            <footer>
                <p>Copyright by Coders Lab</p>
                <div className="media">
                    <img src={Facebook} alt={Facebook} />
                    <img src={Instagram} alt={Instagram} />
                </div>
            </footer>
        </section>
    );
};

export default FooterForm;
