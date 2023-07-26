import React from 'react';
import cv from "../../assets/cv.pdf";

function Download() {
    return (
        <div className="home__download">
            <div className='Download'>
                <a href="{cv}" download>cownload__cv</a>
            </div>
        </div>

    )
}

export default Download