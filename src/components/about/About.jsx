import React from 'react';
import "./about.css";
import "../../assets/cv.pdf";


function About() {
    return (
        <div className="container">
            <section className='about__section' id='about'>
                <h2 className="section__title">About Me</h2>
                <span className='section__subtitle'>My introduction</span>

                <div className="about__container container__grid">
                    <div className="about__img"></div>
                    <p className='about__info'>info</p>
                    <p className="about__description">Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
                    </p>

                    <div className="about__download">
                        <div className='Download'>
                            <a href="{cv}" download><span className='download__text'>download__cv <i><i className="uil uil-file-download-alt"></i></i></span></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About