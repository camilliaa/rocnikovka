import React from 'react';
import '../styles/MainContent.css'; 
import BGVid from '../img/background_video.mp4';
import BGImg from '../img/bgb.png';

function MainContent() {
    return (
        <main>
            <div>
                <img className='bg' src={BGImg} alt='backup-background'/>
                <video className='video' autoPlay loop muted playsInline preload='auto'>
                    <source src={BGVid} type='video/mp4' />
                </video>
            </div>
            <div className="introduction">
                <h1>Dan Di Rezo Daněk</h1>
                <p>tatér od roku 2013</p>
                <p>tetování Znojmo & Brno</p>
                <a href="#booking"><button>Booking</button></a>
            </div>
        </main>
    );
}

export default MainContent;