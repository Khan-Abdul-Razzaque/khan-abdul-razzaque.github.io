import React, { } from 'react'
import './Recommended.css'
import { Link } from 'react-router-dom'
import { saveHistory, valueConverter } from '../..'
import moment from 'moment'

const Recommended = ({ category, videoList }) => {
    // const thumbnailUrl = 'https://i.ytimg.com/vi/xLXVUV7E-i8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5q1271z53IKeijIfqlHzb7exNxQ'
    // const [reccVideos, setReccVideos] = useState([])
    // let videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    // const videoListOfSameCategory = async () => {
    //     const fitchReccVideos = await fetch(videoUrl)
    //     const responseData = await fitchReccVideos.json();
    //     setReccVideos(responseData.items)
    // // }
    // useEffect(() => {
    //     // if (category == 0) {
    //         // videoListOfSameCategory();
    //     // }
    //     // else {
    //         setReccVideos(videoList);
    //     // }
    // }, [])

    return (
        <div className="recommended">
            {videoList.map((video, index) => {
                return (
                    <Link key={index} className="videoCard flex space-between" to={`/video/${video.snippet.categoryId}/${video.id}`} onClick={() => { saveHistory(video); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                        <div className="rec-thumbnail">
                            <img src={video.snippet.thumbnails.medium.url} alt="" />
                            <div className="duration">{`${moment.duration(video.contentDetails.duration).hours() !== 0 ? (moment.duration(video.contentDetails.duration).hours() + ":") : ""}`}{moment.duration(video.contentDetails.duration).minutes()}:{moment.duration(video.contentDetails.duration).seconds()}</div>
                        </div>
                        <div className="videoInfo">
                            <p>{video.snippet.title}</p>
                            <p>{video.snippet.channelTitle}</p>
                            <p>{valueConverter(video.statistics.viewCount)} views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended
