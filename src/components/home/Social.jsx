import React from 'react';
import Lottie from 'react-lottie';
import animationData5 from '../../assets/animation_lm4tqkff.json';
import animationData6 from '../../assets/animation_lm4v2hov.json';
import "./social.css";

function AnimatedComponent() {
    const topAnimations = [
        {
            options: {
                loop: true,
                autoplay: true,
                animationData: animationData5,
            },
            link: 'https://www.facebook.com/?_rdc=2&_rdr=',
        },
    ];

    const bottomAnimations = [
        {
            options: {
                loop: true,
                autoplay: true,
                animationData: animationData6,
            },
            link: '/link3',
        },
    ];

    return (
        <div className='social__animacion'>
            <div className='left-animation'>
                {topAnimations.map((animation, index) => (
                    <div key={index} className='animation-container'>
                        <a href={animation.link} target="_blank" rel="noopener noreferrer" className="animation-link">
                            <Lottie options={animation.options} />
                        </a>
                    </div>
                ))}
            </div>
            <div className='right-animation'>
                {bottomAnimations.map((animation, index) => (
                    <div key={index} className='animation-container__box'>
                        <a href={animation.link} target="_blank" rel="noopener noreferrer" className="animation-link">
                            <Lottie options={animation.options} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnimatedComponent;
