import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import toggleBar from '../../assets/menu_toggle.svg'
import mic_icon from '../../assets/mic_icon.svg'
import notificationIcon from '../../assets/notification_bell.svg'
import search_icon from '../../assets/search_icon.svg'
import videoCall from '../../assets/video_call.svg'
import ytbLogo from '../../assets/youtube_logo.svg'
import myImage from '../../assets/My Image.png'
import './Navbar.css'

const Navbar = ({ toggleSidebar, setToggleSidebar }) => {
    const inputBox = useRef()
    const expandSearchBox = () => {
        window.innerWidth < 1250 && inputBox.current.classList.toggle('expandSearchBox')
    }
    return (
        <div className="nav-bar flex align-center space-between">
            <div className="nav-sec-1 nav-sec flex align-center">
                <div onClick={() => { setToggleSidebar(!toggleSidebar) }} id="toggleBar" className="image-div flex align-center justify-center"><img src={toggleBar} alt="toggle bar" />
                </div>
                <Link className="flex align-center" to="/"><img id="ytb-logo" src={ytbLogo} alt="" /></Link>
                <span id="region">IN</span>
            </div>
            <div className="nav-sec-2 nav-sec flex align-center">
                <div className="search flex align-center">
                    <div className="search-box flex align-center">
                        {/* <img style={{ display: 'none' }} src={search_icon} alt="search" /> */}
                        <input ref={inputBox} id="input-box" type="text" placeholder="Search" />
                    </div>
                    <div className="search-icon" onClick={expandSearchBox}>
                        <img src={search_icon} alt="search" />
                    </div>
                </div>
                <div className="image-div flex align-center justify-center"><img src={mic_icon} alt="" /></div>
            </div>
            <div className="nav-sec-3 nav-sec flex align-center">
                <div className="image-div flex align-center justify-center"><img src={videoCall} alt="video_call" /> </div>
                <div className="image-div flex align-center justify-center"><img src={notificationIcon} alt="notification" /></div>
                <div className="user image-div flex align-center justify-center">
                    <img id='user-profile' src={myImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar