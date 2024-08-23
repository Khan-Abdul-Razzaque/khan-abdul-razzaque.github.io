import React, { useState } from 'react'
import History from '../../Components/HIstory/History'
import Sidebar from '../../Components/Sidebar/Sidebar'
import VideoCard from '../../Components/VideoCard/VideoCard'
import './Home.css'

const Home = ({ toggleSidebar, category, setCategory, videoList, fetchVideos, isLoaded }) => {
    const [homePageControl, setHomePageControl] = useState(0);
    return (
        <div className='home'>
            <div className='container sidebar-container'>
                <Sidebar toggleSidebar={toggleSidebar} category={category} setCategory={setCategory} homePageControl={homePageControl} setHomePageControl={setHomePageControl} />
            </div>
            <div className='container'>
                {homePageControl === 0 && <VideoCard toggleSidebar={toggleSidebar} category={category} videoList={videoList} fetchVideos={fetchVideos} isLoaded={isLoaded} />}
                {homePageControl === 1 && <History toggleSidebar={toggleSidebar} />}
            </div>
            {/* {homePageControl === 2 && <Library toggleSidebar={toggleSidebar} setHomePageControl={setHomePageControl} />} */}
        </div>
    )
}

export default Home
