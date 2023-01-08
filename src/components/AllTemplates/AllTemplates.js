import React from 'react';
import './AllTemplates.css'
const AllTemplates = () => {
    return (
        <section className='all-templates'>
            <div className='see-all'>
                <h3 className='see-all-text'>Start with a template</h3>
                <div><button className='get-start-button'>See All Templates</button></div>
            </div>

            <div className='card-container'>
                <div className='card'>
                    <img src={require('../../Assests/images/card1.png')} alt="" className='card-img' />
                    <div className='card-body'>
                        <div className='blog-post'>Blog Post</div>
                        <h4 className='card-title'>Blog Post</h4>
                        <p className='card-text'>Generate whole SEO optimized blog post in one go.</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={require('../../Assests/images/card2.png')} alt="" className='card-img' />
                    <div className='card-body'>
                        <div className='blog-post'>Blog Post</div>
                        <h4 className='card-title'>Long From Assistant</h4>
                        <p className='card-text'>Long form assisttant helps you write blog posts 10x faster ...</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={require('../../Assests/images/card3.png')} alt="" className='card-img' />
                    <div className='card-body'>
                        <div className='ai-tool'>AI tool</div>
                        <h4 className='card-title'>Readability Improver</h4>
                        <p className='card-text'>This tool will enhance the readability of your content ...</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={require('../../Assests/images/card4.png')} alt="" className='card-img' />
                    <div className='card-body'>
                        <div className='copy-writting'>Copywriting</div>
                        <h4 className='card-title'>Copywriting templates</h4>
                        <p className='card-text'>All copywriting templates including ...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllTemplates;