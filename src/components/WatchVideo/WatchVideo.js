import React from 'react';
import './WatchVideo.css'

const WatchVideo = () => {
    return (
        <section className='watch-video-container'>
            <div className='video-frame'>
                <img src={require('../../Assests/video-Frame.png')} alt="" />
            </div>

            <div className='full-video'>
                <div>
                    <img src={require('../../Assests/play.png')} alt="" />
                </div>
                <p>Watch full video</p>
            </div>



        </section>
    );
};

export default WatchVideo;