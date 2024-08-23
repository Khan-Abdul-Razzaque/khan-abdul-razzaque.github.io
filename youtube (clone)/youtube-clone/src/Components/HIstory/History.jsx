import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { deleteHisVideo, displayHisVideos, valueConverter } from '../..'
import deleteIcon from '../../assets/delete_icon.png'
import './History.css'

const History = ({ toggleSidebar }) => {
    const hisVideoList = displayHisVideos();
    return (
        hisVideoList !== false && <div className={`history ${toggleSidebar ? 'big-history' : ''}`}>
            {hisVideoList.map((video, index) => {
                return (
                    <div className='history-card' key={index}>
                        <Link className="his-vid-card flex" to={`/video/${video.snippet.categoryId}/${video.id}`}>
                            <div className="his-thumbnail flex">
                                <img src={video.snippet.thumbnails.medium.url} alt="" />
                                <div className="duration">{`${moment.duration(video.contentDetails.duration).hours() !== 0 ? (moment.duration(video.contentDetails.duration).hours() + ":") : ""}`}{moment.duration(video.contentDetails.duration).minutes()}:{moment.duration(video.contentDetails.duration).seconds()}</div>
                            </div>
                            <div className="his-vid-detail">
                                <p>{video.snippet.title}</p>
                                <p>{video.snippet.channelTitle}</p>
                                <p>{valueConverter(video.statistics.viewCount)} views</p>
                            </div>
                        </Link>
                        <div className="delete" onClick={(e) => { deleteHisVideo(e.currentTarget.parentElement, video.id) }}><i className='bx bx-arrow-from-right' ></i><img className='delete-icon' src={deleteIcon} alt="" /></div>
                    </div>
                )
            })}
        </div>
    )
}

export default History