import React from 'react';
import "./contact.css";
import gmail from "../../assets/gmail.png";
import whatsapp from "../../assets/whatsapp.png";
import messenger from "../../assets/messenger.png";
import linkedin from "../../assets/linkedin.png";


function Contact() {
    return (
        <div className="container">
            <section className="contact" id="section_id">

                <div className="contact__title__box">
                    <h2 className="section__title">get in touch</h2>
                    <span className='section__subtitle'>contact Me</span>
                </div>

                <h3 className="contact__title">talk to me</h3>

                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__card">
                            <a href="https://mail.google.com/" target="_blank">
                                <img className='contact__card__icon' src={gmail} alt="gmail" />
                            </a>

                            <h3 className="contact__card__title">Email</h3>
                            <span className="contact__card__data">user@gmail.com</span>

                        </div>


                        <div className="contact__card">
                            <a href="https://web.whatsapp.com/" target="_blank">
                                <img className='contact__card__icon' src={whatsapp} alt="gmail" />
                            </a>

                            <h3 className="contact__card__title">whatsapp</h3>
                            <span className="contact__card__data">551-105-103</span>

                        </div>

                        <div className="contact__card">
                            <a href="https://www.facebook.com/bacho.davitashvili.94" target="_blank">
                                <img className='contact__card__icon' src={messenger} alt="gmail" />
                            </a>
                            <h3 className="contact__card__title">messenger</h3>

                        </div>

                        <div className="contact__card">
                            <a href="https://www.facebook.com/bacho.davitashvili.94" target="_blank">
                                <img className='contact__card__icon' src={linkedin} alt="gmail" />
                            </a>
                            <h3 className="contact__card__title">linkedin</h3>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact