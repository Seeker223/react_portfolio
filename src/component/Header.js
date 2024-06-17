import React from 'react'
import profileImage from "../assest/img/Amit.jpg"
const Header = () => {
    return (
        <div className='header-container' id='home'>
            <div className='header-left'>
                <div className='profile-image'>
                    <img src={profileImage} />
                </div>
            </div>
            <div className='header-right'>
                <div className='header-right-content'>
                    <h3>Full Stack Developer</h3>
                    <h1>Amit Prajapati</h1>
                    <p>I'm passionate about developing a better world through technology. I graduated from the Mumbai University with Bsc in Information Technology. I've always been an analytical problem solver as well and the software developing process is a great fit for my personality and thinking style</p>
                    <div className='header-right-button'>
                        <a href='#download'><button>Download</button></a>
                        <a href='#contact'><button>Contact</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header