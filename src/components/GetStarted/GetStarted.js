import React from 'react';
import './GetStarted.css'

const GetStarted = () => {
    return (
        <section className='get-started-container'>
            <div className='container'>
                <h3 className='get-started-text'>Get started writing the way
                    you want today</h3>
                <div className='get-started-buttons'>
                    <div><button className='get-start-free-button'>Get Strated for Free</button></div>
                    <div className='explore-plan-button'> Explore Plans</div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;