import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <p className='copywriting-text'>Copywriting done 10X faster</p>

            <div className='banner-text'>
                <h1>Let Our Assistant <br />
                    Help You With <br />
                    <span>Summarizing Blogs.</span>
                </h1>
                <p>Get writing superpowers with artificial intelligence. We at AISEO will help you convert your thoughts to blogs and can write for you at the click of a button.</p>
            </div>

            <div className='banner-buttons'>
                <div><button className='get-start-button'>Get Strated for Free</button></div>
                <div className='join-button'> Join Our Community</div>
            </div>
        </div>
    );
};

export default Banner;