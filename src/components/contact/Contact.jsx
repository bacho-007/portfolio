import React from 'react';
import Lottie from 'react-lottie';
import animationData1 from '../../assets/animation_llxwgag4.json';
import animationData2 from '../../assets/animation_llxw8gmj.json';
import animationData3 from '../../assets/animation_llxve6e5.json';
import animationData4 from '../../assets/animation_llxzmh3e.json';

import './contact.css';

function AnimatedComponent() {
    const topAnimations = [
        {
            options: {
                loop: true,
                autoplay: true,
                animationData: animationData1,
            },
            link: 'https://www.facebook.com/?_rdc=2&_rdr=',
        },
        {
            options: {
                loop: true,
                autoplay: true,
                animationData: animationData2,
            },
            link: '/link2',
        },
    ];

    const bottomAnimations = [
        {
            options: {
                loop: true,
                autoplay: true,
                animationData: animationData3,
            },
            link: '/link3',
        },
        {
            options: {
                loop: true,
                autoplay: true,
                animationData: animationData4,
            },
            link: '/link4',
        },
    ];

    return (
        <div className='social__animacion__container'>
            <div className='top-animations'>
                {topAnimations.map((animation, index) => (
                    <div key={index} className='animation-container'>
                        <a href={animation.link} target="_blank" rel="noopener noreferrer" className="animation-link">
                            <Lottie options={animation.options} />
                        </a>
                    </div>
                ))}
            </div>
            <div className='bottom-animations'>
                {bottomAnimations.map((animation, index) => (
                    <div key={index} className='animation-container'>
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

