import React from 'react';
import "./skills.css";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import react from "../../assets/science.png";
import sass from "../../assets/sass.png";
import figma from "../../assets/figma.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";





function Skills() {
    return (
        <div className="container">
            <div className="skills__contant">
                <div className="skills__title">Skills</div>
                <p className='skills__subtitle'>my technicol level</p>
            </div>

            <div className="frontend">
                <div className="skills__frontend">

                    <div className="skills__frontend__box">
                        <div className="skills__frontend__box__element">
                            <img className='skills__frontend__box__element' src={html} alt="" />
                            <h3 className="skills__img__title">html</h3>
                        </div>

                        <div className="skills__frontend__box__element">
                            <img className='skills__frontend__box__element' src={css} alt="" />
                            <h3 className="skills__img__title">css</h3>
                        </div>

                        <div className="skills__frontend__box__element">
                            <img className='skills__frontend__box__element' src={js} alt="" />
                            <h3 className="skills__img__title">javascript</h3>
                        </div>


                        <div className="skills__frontend__box__element">
                            <img className='skills__frontend__box__element' src={react} alt="" />
                            <h3 className="skills__img__title">react</h3>
                        </div>

                        <div className="skills__frontend__box__element">
                            <img className='skills__frontend__box__element' src={sass} alt="" />
                            <h3 className="skills__img__title">sass</h3>
                        </div>

                        <div className="skills__frontend__box__element">
                            <img className='skills__frontend__box__element' src={figma} alt="" />
                            <h3 className="skills__img__title">figma</h3>
                        </div>

                        <div className="skills__frontend__box__element">
                            <img className='skills__frontend__box__element' src={git} alt="" />
                            <h3 className="skills__img__title">git</h3>
                        </div>

                        <div className="skills__frontend__box__element">
                            <img className='skills__frontend__box__element' src={github} alt="" />
                            <h3 className="skills__img__title">github</h3>
                        </div>




                    </div>


                </div>


            </div>


        </div >
    )
}

export default Skills