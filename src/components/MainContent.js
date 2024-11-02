import React from 'react';
import '../styles/MainContent.css'; 
import BGVid from '../img/background_video.mp4';

function MainContent() {
    return (
        <main>
            <div>
                <video className='videoTag' autoPlay loop muted>
                    <source src={BGVid} type='video/mp4' />
                </video>
            </div>
            
        </main>
    );
}

export default MainContent;