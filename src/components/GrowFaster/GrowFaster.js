import React from 'react';
import './GrowFaster.css'

const GrowFaster = () => {
    return (
        <section className='grow-faster'>
            <div className='rating'>
                <div>
                    <h2>15,000+</h2>
                    <p>Happy marketers, Writers & entrepreneurs</p>
                </div>
                <div className='reviews'>
                    <h2>4.9/5</h2>
                    <p>Stars in over 500+ reviews on Trustpilot, G2 & Appsumo</p>
                </div>
                <div>
                    <h2>26+</h2>
                    <p>Supported languages & adding more</p>
                </div>
            </div>


            <div className='abilities'>
                <div className='abilities-box'>
                    <img src={require('../../Assests/icons/rocket.png')} alt="" />

                    <h4>Grow 10x faster</h4>
                    <p>With the power of AI you have the power to grow faster than you ever thought.</p>
                </div>

                <div className='abilities-box'>
                    <img src={require('../../Assests/icons/token.png')} alt="" />

                    <h4>Get more done</h4>
                    <p>With our AI you are able to get your work done in a fraction of the time it takes to do it alone.</p>
                </div>

                <div className='abilities-box' >
                    <img src={require('../../Assests/icons/diamond.png')} alt="" />

                    <h4>Find more opportunities</h4>
                    <p>Our mission is to help creators find more opportunities and push the limits.</p>
                </div>
            </div>

        </section>
    );
};

export default GrowFaster;