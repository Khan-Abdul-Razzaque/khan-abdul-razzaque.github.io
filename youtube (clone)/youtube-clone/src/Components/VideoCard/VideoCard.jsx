import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { saveHistory, valueConverter } from '../..'
import profileIcon from '../../assets/My Image.png'
import VideoTab from '../VideoTab/VideoTab'
import './VideoCard.css'

const VideoCard = ({ toggleSidebar, videoList, isLoaded }) => {

    // const { channelId } = useParams()
    // const channelProfileIconUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}&maxResults=5`;
    // const fetchProfileIcon = async () => {
    //     const fetchProfile = await fetch(channelProfileIconUrl);
    //     const profile = await fetchProfile.json();
    // }

    const colors = ["#4a2e2ed0", "#483d30d0", "#313a2bd0", "#403d27d0", "#24352dd0", "#243435d0", "#242535d0", "#382a3cd0", "#c800ff2d", "#0022ff2d", "#00fbff2d", "#00ff0823", "#ff000023", "#4444449a", "#72727256"]

    const handleMouseOver = (e) => {
        e.currentTarget.style.backgroundColor = e.currentTarget.dataset.color;
    }

    const handleMouseOut = (e) => {
        e.currentTarget.style.backgroundColor = ""
    }

    return (
        isLoaded && <div id="video_container" className={`video-container ${toggleSidebar ? 'big-video-container' : ''}`}>
            <div className="videos-tabs">
                <VideoTab />
                <div className="videos">
                    {videoList.map((video, index) => {
                        return (
                            <Link key={index} data-color={colors[Math.ceil(Math.random() * 5)]} className="links" to={`/video/${video.snippet.categoryId}/${video.id}`} onClick={() => { saveHistory(video); window.scrollTo(0, 0); }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                <div className="video">
                                    <div className="thumbnail flex">
                                        <img src={video.snippet.thumbnails.medium.url} alt="" />
                                        <div className="duration">{`${moment.duration(video.contentDetails.duration).hours() !== 0 ? (moment.duration(video.contentDetails.duration).hours() + ":") : ""}`}{moment.duration(video.contentDetails.duration).minutes()}:{moment.duration(video.contentDetails.duration).seconds()}</div>
                                    </div>
                                    <div className="video-info flex">
                                        <div>
                                            <div className="channel-icon">
                                                <img src={profileIcon} alt="" />
                                            </div>
                                        </div>
                                        <div className="vd-detail">
                                            <h4>{video.snippet.title}</h4>
                                            <p>{video.snippet.channelTitle} &bull; {valueConverter(video.statistics.viewCount)} views &bull; {moment(video.snippet.publishedAt).fromNow()}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default VideoCard
