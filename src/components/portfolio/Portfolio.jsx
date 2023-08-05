import React, { useState } from 'react';
import './portfolio.css';
import baner from '../../assets/js.png';

function Portfolio() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <section id="portfolio">
                <h5 className="portfolio__title">my recent work</h5>

                <div className="portfolio__item">
                    <img className="portfolio__img" src={baner} alt="" />

                    <span className="portfolio__item__title" onClick={() => toggleTab(1)}>
                        view More... <i className="uil uil-arrow-right servis_button_icon"></i>
                    </span>

                    <div className={`${toggleState === 1 ? 'portfolio__wive__model active-modal' : 'portfolio__wive__model'
                        }`}>
                        <div className="portfolio__wive__model_servis">
                            <span className="close__buttton">
                                <i onClick={() => toggleTab(0)} className="uil uil-times "></i>
                            </span>

                            <h3 className="portfolio__wive__model__title">the site info</h3>
                            <p className="portfolio__wive__model__text">hi, I am...</p>
                        </div>
                    </div>

                    <div className="portfolio__link">
                        <a href="" className="portfolio__githab">github</a>
                        <a href="" className="portfolio__livedemo">live demo</a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Portfolio;
