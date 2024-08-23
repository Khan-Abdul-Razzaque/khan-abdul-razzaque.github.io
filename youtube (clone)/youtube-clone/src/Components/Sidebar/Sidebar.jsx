import React from 'react'
import coursesIcon from '../../assets/courses.svg'
import fashbeaIcon from '../../assets/fashbea.svg'
import feedbackIcon from '../../assets/feedback.svg'
import filmsIcon from '../../assets/films.svg'
import gamingIcon from '../../assets/gaming.svg'
import helpIcon from '../../assets/help.svg'
import historyIcon from '../../assets/history.svg'
import homeIcon from '../../assets/home_icon.svg'
import likedVideoIcon from '../../assets/liked_video.svg'
import liveIcon from '../../assets/live.svg'
import moreIcon from '../../assets/more.svg'
import musicIcon from '../../assets/music.svg'
import newsIcon from '../../assets/news.svg'
import playlistIcon from '../../assets/playlist.svg'
import podcastsIcon from '../../assets/podcasts.svg'
import reportHistoryIcon from '../../assets/report_his.svg'
import settingIcon from '../../assets/setting.svg'
import shoppingIcon from '../../assets/shopping.svg'
import shortsIcon from '../../assets/shorts_icon.svg'
import sportsIcon from '../../assets/sports.svg'
import subscriptionIcon from '../../assets/sub_icon.svg'
import trendingIcon from '../../assets/trending.svg'
import watchLatterIcon from '../../assets/watch_later.svg'
import yourChannelIcon from '../../assets/your_channel.svg'
import yourVideoIcon from '../../assets/your_video.svg'
import ytbKidsIcon from '../../assets/ytb_kids.svg'
import ytbMusicIcon from '../../assets/ytb_music.svg'
import ytbPremiumIcon from '../../assets/ytb_premium.svg'
import ytbStudioIcon from '../../assets/ytb_studio.svg'
import youIcon from '../../assets/you.svg'
import './Sidebar.css'

const Sidebar = ({ toggleSidebar, category, setCategory, homePageControl, setHomePageControl }) => {
    return (
        <div id="sideBar" className={`sidebar ${toggleSidebar && window.innerWidth > 1250 ? "mini-sidebar" : ""} ${toggleSidebar && window.innerWidth < 1250 ? "" : "hidden-sidebar"}`}>
            <div className="box">
                <ul>
                    <div className={`sidebar-links align-center ${category === 0 && homePageControl === 0 ? "active" : ""}`} onClick={() => { setCategory(0); setHomePageControl(0) }}>
                        <img className={`${category === 0 && homePageControl === 0 ? "" : "invert"}`} src={homeIcon} alt="home" />
                        <li className="flex align-center">Home</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={shortsIcon} alt="shorts" />
                        <li className="flex align-center">Shorts</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={subscriptionIcon} alt="subscription" />
                        <li className="flex align-center">Subscription</li>
                    </div>
                    <div id="m_s_item" className={`sidebar-links align-center ${toggleSidebar && window.innerWidth > 1250 ? "" : "hidden"}`} onClick={() => { setHomePageControl(2) }}>
                        <img src={youIcon} alt="subscription" />
                        <li className="flex align-center">You</li>
                    </div>
                </ul>
            </div>
            <hr className="hidden-items" />
            <div className="box hidden-items">
                <h3 className="sidebar-links flex align-center">You</h3>
                <ul>
                    <div className="sidebar-links align-center">
                        <img src={yourChannelIcon} alt="your channel" />
                        <li className="flex align-center">Your Channel</li>
                    </div>
                    <div className={`sidebar-links align-center ${homePageControl === 1 ? "active" : ""}`} onClick={() => { setHomePageControl(1) }}>
                        <img className={`${homePageControl === 1 ? "" : "invert"}`} src={historyIcon} alt="history" />
                        <li className="flex align-center">History</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={playlistIcon} alt="playlist" />
                        <li className="flex align-center">Playlist</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={yourVideoIcon} alt="your video" />
                        <li className="flex align-center">Your Video</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={watchLatterIcon} alt="watch later" />
                        <li className="flex align-center">Watch later</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={likedVideoIcon} alt="liked vidoe" />
                        <li className="flex align-center">Liked Video</li>
                    </div>
                </ul>
            </div>
            <hr className="hidden-items" />
            <div className="box hidden-items">
                <h3 className="flex align-center">Subscription</h3>
                <ul>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/ytc/AIdro_kNaumymcxYzV7_n7_VRbQ2TRlIbU2w5csOMN0cH8jiED8=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">codeWithHarry</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/ytc/AIdro_mwDG5c8dHc3OXHHkfVRAku-f_8WkowUqaRKtPh3upc4pQ=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">अंतरिक्ष TV</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/F6V5Z9COzQuLBJ4T6_YM7va-dL1kTlXfuXZOa3EHOV6F4_Kgum6HFMQtXkUdk_ep1RWMHzOa=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">Abu Shahma Samani</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/csBGlsetnliEbfL-gWQVezlCerKTtc0A5pqzWaBMrEwv82DJG1DpnnmUanXWwftkc-XyS-XzYw=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">KHAN'S ACADEMY</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/2UCiZ7-jIJf8G26C0ZwehtSBHsmJk4nBr2xLoaNEbUlJ3wDfFpFW0D138j0UDoeqEApat42FhBw=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">Towards Eternity - اردو हिंदी</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/ytc/AIdro_mY2FOEMPxC_yQmfF97aG6gqV-YKiZPZY-mr2ORtLISQw=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">Nasheed Club</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/PHzVzMQoLajz_4UyC95iwnt0_dPT4v-x0MF9F9g2TFzhs6ab7xMmhyx2ZPtil5bEgab_kRt2gg=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">Sbj Classes</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/uG4v6r4O79i7J_rEuo6ASC3kjBq1cbXod0RP3R6lZbk7DFFGVUIULd8DAj4yd4Ea8jQLLFHdVQ=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">WAYOFLIFESQ</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/90Y05oknDb2VVliQk-okfNNI2gjD-qddVjn1LndselpTSKuoP0oAsteC14U9UEwvxeSbrJ1UA-o=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">LifeAda</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/S1hvMUGhao5BvwEV59KHtzeu-Zwv9nXIZPl_dyoPZMike4Ru0cjIKotDH3tVCb8GMdEs0o9Eig=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">M Iqbal rather official</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/ytc/AIdro_mpEFtiA2V5L5I4-cBfNfCwOSWwV4z6O_U_wkeg6qHkJIs=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">Spoken English Guru</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/8gnENVPHO7vkQgBp4aigKXFyL0NMljWLW2rPhUaCJy-L6NW00sRGybLnNn7eTu5aarf6xg140g=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">ALL - IN - ONE</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image"
                            src="https://yt3.ggpht.com/ytc/AIdro_ks343H3Hn6o-j_NgIAIC1bKUC1dYOTPpBBkrkLtBqWlTz6=s88-c-k-c0x00ffffff-no-rj"
                            alt="home" />
                        <li className="flex align-center"><span className="ellipsis">Aleena Rais Live</span></li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img className="circular-image" src={moreIcon} alt="home" />
                        <li className="flex align-center"><span className="ellipsis">Show more</span></li>
                    </div>
                </ul>
            </div>
            <hr className="hidden-items" />
            <div className="box hidden-items">
                <h3 className="flex align-center">Explore</h3>
                <ul>
                    <div className="sidebar-links align-center">
                        <img src={trendingIcon} alt="trending" />
                        <li className="flex align-center">Trending</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={shoppingIcon} alt="shopping" />
                        <li className="flex align-center">Shopping</li>
                    </div>
                    <div className={`sidebar-links align-center ${category === 10 ? "active" : ""}`} onClick={() => { setCategory(10); setHomePageControl(0) }}>
                        <img className={`${category === 10 ? "" : "invert"}`} src={musicIcon} alt="music" />
                        <li className="flex align-center">Music</li>
                    </div>
                    <div className={`sidebar-links align-center ${category === 1 ? "active" : ""}`} onClick={() => { setCategory(1); setHomePageControl(0) }}>
                        <img className={`${category === 1 ? "" : "invert"}`} src={filmsIcon} alt="films" />
                        <li className="flex align-center">Films</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={liveIcon} alt="live" />
                        <li className="flex align-center">Live</li>
                    </div>
                    <div className={`sidebar-links align-center ${category === 20 ? "active" : ""}`} onClick={() => { setCategory(20); setHomePageControl(0) }}>
                        <img className={`${category === 20 ? "" : "invert"}`} src={gamingIcon} alt="gaming" />
                        <li className="flex align-center">Gaming</li>
                    </div>
                    <div className={`sidebar-links align-center ${category === 25 ? "active" : ""}`} onClick={() => { setCategory(25); setHomePageControl(0) }}>
                        <img className={`${category === 25 ? "" : "invert"}`} src={newsIcon} alt="news" />
                        <li className="flex align-center">News</li>
                    </div>
                    <div className={`sidebar-links align-center ${category === 17 ? "active" : ""}`} onClick={() => { setCategory(17); setHomePageControl(0) }}>
                        <img className={`${category === 17 ? "" : "invert"}`} src={sportsIcon} alt="sport" />
                        <li className="flex align-center">Sport</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={coursesIcon} alt="courses" />
                        <li className="flex align-center">Courses</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={fashbeaIcon} alt="fashion and beauty" />
                        <li className="flex align-center">Fashion & Beauty</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={podcastsIcon} alt="podcast" />
                        <li className="flex align-center">Podcasts</li>
                    </div>
                </ul>
            </div>
            <hr className="hidden-items" />
            <div className="box hidden-items">
                <h3 className="flex align-center">More from YouTube</h3>
                <ul>
                    <div className="sidebar-links align-center">
                        <img src={ytbPremiumIcon} alt="premium" />
                        <li className="flex align-center">YouTube Premium</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={ytbStudioIcon} alt="studio" />
                        <li className="flex align-center">YouTube Studio</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={ytbMusicIcon} alt="music" />
                        <li className="flex align-center">YouTube Music</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={ytbKidsIcon} alt="kids" />
                        <li className="flex align-center">YouTube Kids</li>
                    </div>
                </ul>
            </div>
            <hr className="hidden-items" />
            <div className="box hidden-items">
                <ul>
                    <div className="sidebar-links align-center">
                        <img src={settingIcon} alt="setting" />
                        <li className="flex align-center">Setting</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={reportHistoryIcon} alt="report" />
                        <li className="flex align-center">Report History</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={helpIcon} alt="help" />
                        <li className="flex align-center">Help</li>
                    </div>
                    <div className="sidebar-links align-center">
                        <img src={feedbackIcon} alt="feedback" />
                        <li className="flex align-center">Send feedback</li>
                    </div>
                </ul>
            </div>
            <hr className="hidden-items" />
            <div className="box app-details hidden-items">
                <div>
                    <span>About</span>
                    <span>Press</span>
                    <span>Copyright</span>
                    <span>Contact us</span>
                    <span>Creator</span>
                    <span>Advertise</span>
                    <span>Developers</span>
                </div>
                <div>
                    <span>Terms</span>
                    <span>Privacy</span>
                    <span>Policy & Safety</span>
                    <span>How YouTube works</span>
                    <span>Test new features</span>
                </div>
                <div>
                    <span style={{ color: 'rgb(83, 83, 83)' }}>&copy; 2024 Google LLC</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
