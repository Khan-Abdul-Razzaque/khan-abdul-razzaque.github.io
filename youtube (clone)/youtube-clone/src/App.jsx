import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { API_KEY } from '.'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [category, setCategory] = useState(0);
  const [videoList, setVideoList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchVideos = async () => {
    setIsLoaded(false)
    let videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=status,snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    let newfetchedVideos = []
    for (let i = 0; ; i++) {
      const response = await fetch(videoUrl);
      const fetchedData = await response.json();
      newfetchedVideos = [...newfetchedVideos, ...fetchedData.items];
      setVideoList(newfetchedVideos)
      if (fetchedData.nextPageToken) {
        videoUrl += `&pageToken=${fetchedData.nextPageToken}`
      }
      else {
        setIsLoaded(true)
        break
      }
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [category])

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
      <Routes>
        <Route path='/' element={<Home toggleSidebar={toggleSidebar} category={category} setCategory={setCategory} videoList={videoList} setVideoList={setVideoList} fetchVideos={fetchVideos} isLoaded={isLoaded} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video category={category} videoList={videoList} />} />
      </Routes>
    </div>
  )
}

export default App