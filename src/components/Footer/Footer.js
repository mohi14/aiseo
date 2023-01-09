import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <section className='footer-container'>
            <div className='footer'>
                <div >
                    <img src={require('../../Assests/logo1.png.png')} alt="" />
                    <p>© AISEO. All Rights Reserved.
                        Built by.</p>
                </div>
                <div>
                    <h6>Info</h6>
                    <p>contact</p>
                    <p>Pricing</p>
                    <p>Roadmap</p>
                    <p>Become an affiliate</p>
                </div>
                <div>
                    <h6>Products</h6>
                    <p>Paraphrasing Online</p>
                    <p>AI Image generator</p>
                    <p>Reverse image</p>
                    <p>Email generator</p>
                    <p>Sentence rewriter</p>
                    <p>Paragraph rewriter</p>
                    <p>Article rewriter</p>
                    <p>Rewording tool</p>
                </div>
                <div>
                    <h6>Admin</h6>
                    <p>Privacy Policy</p>
                    <p>Fair Usage Policy</p>
                    <p>Sitemap</p>
                    <p>Terms & conditions</p>
                </div>
                <div>
                    <h6>Pages</h6>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Text to image generator</p>
                    <p>Diff Checker</p>
                    <p>Article rewriter</p>
                    <p>Readbility improver</p>
                    <p>Shortlyai alternative</p>
                    <p>Sentence Rephrase</p>
                    <p>Spinbot</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;