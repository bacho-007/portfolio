import React from 'react';
import "./home.css";
import about from '../../assets/about.jpg';


function Home() {
    return (
        <section className="home__section" id="home">
            <div className="home__container">
                <div className="home__content">

                    <h4 className="helo">helo i'm</h4>
                    <h1 className="home__title">bacho davitashvili</h1>
                    <h3 className="home__subtitle">front end developer</h3>

                    <div className="home__img" style={{ backgroundImage: `url(${about})` }}></div>

                </div>
            </div>
        </section>
    )
}

export default Home