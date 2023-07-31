import React from 'react';
import "./portfolio.css";
import baner from "../../assets/js.png";

function Portfolio() {
    return (
        <div className="container">
            <section id='portfolio'>
                <h5 className="portfolio__title">my recent work</h5>


                <div className='portfolio__item'>
                    <img className='portfolio__img' src={baner} alt="" />

                    <h3 className="portfolio__item__title">thid is sait is</h3>

                    <div className="portfolio__link">
                        <a href="https://github.com/bacho-007/portfolio" className="portfolio__githab" target='_blank'>githab</a>
                        <a href="https://dribbble.com/shots" className="portfolio__livedemo" target='_blank'>live demo</a>
                    </div>

                </div>




            </section>
        </div>
    )
}

export default Portfolio