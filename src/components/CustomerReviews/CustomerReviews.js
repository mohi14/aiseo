import React from 'react';
import './CustomerReviews.css'

const CustomerReviews = () => {
    return (
        <section className='customer-reviews-container'>
            <div className='reviews-header-text'>
                <h3>What Our Customers Think</h3>
                <p>Dui pretium egestas eu proin maecenas. Sed molestie velit, orci urna commodo turpis leo.</p>
            </div>

            <div className='all-reviews'>
                <div className='review-container'>
                    <div className='customers-review-one'>
                        <div >
                            <div className='avater' >
                                <img src={require('../../Assests/avater/avater1.png')} alt="" />
                            </div>
                            <div>
                                <img src={require('../../Assests/icons/stars.png')} alt="" />
                            </div>
                        </div>

                        <h5 className='comments'>"I've recently been using several of these AI Content tools. I'm very pleased with the results from AISEO. Its easy to use and seems like they have a lot of potential to keep growing. Definitely will be adding this to the tool list.."</h5>
                        <h5 className='customer-name'>Bluebrawninc</h5>
                        <h5 className='customer-position'>Head of Idea, Company CEO</h5>
                    </div>
                </div>
                <div className='review-container'>
                    <div className='customers-review-two'>
                        <div >
                            <div className='avater' >
                                <img src={require('../../Assests/avater/avater2.png')} alt="" />
                            </div>
                            <div>
                                <img src={require('../../Assests/icons/stars.png')} alt="" />
                            </div>
                        </div>

                        <h5 className='comments'>"I love the fact that I no longer have ANY EXCUSE not to write. Whenever I have writer's block, the software gives me the edge to conquer it ! Review collected by and hosted on G2.com. What do you disl"</h5>
                        <h5 className='customer-name'>Adrian G</h5>
                        <h5 className='customer-position'>Head of Idea, Company CEO</h5>
                    </div>
                </div>

            </div>

            <div className='review-slide-number-container'>
                <div className='slide-number-one'>01</div>
                <div className='slide-number-two'>02</div>
                <div className='slide-number-one'>03</div>
            </div>

        </section>
    );
};

export default CustomerReviews;