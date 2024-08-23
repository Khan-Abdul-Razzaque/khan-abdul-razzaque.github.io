import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY, displayHisVideos, valueConverter } from '../..'
import myImage from '../../assets/My Image.png'
import './PlayVideo.css'

const PlayVideo = ({ videoList }) => {
    //! React Hooks Variables
    const { videoId } = useParams();
    const [commentList, setCommentList] = useState([])
    const hideComments = useRef()

    //! Normal variables
    const hisVideoList = displayHisVideos()
    let currentVideo = videoList.filter((video) => { return video.id === videoId })[0] ?? hisVideoList.filter((video) => { return video.id === videoId })[0];
    const fetchCommentsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=500&videoId=${videoId}&key=${API_KEY}`;

    //! JavaScript Functions
    const fetchComments = async () => {
        const fetchComments = await fetch(fetchCommentsUrl);
        const commentData = await fetchComments.json();
        setCommentList(commentData.items)
    }

    const manageComments = (e) => {
        e.currentTarget.children[0].classList.toggle('bx-up-arrow-alt');
        e.currentTarget.children[0].classList.toggle('bx-down-arrow-alt');
        if (window.innerWidth < 1000) {
            if (hideComments.current.style.height == 'auto') {
                hideComments.current.style.height = '0'
            }
            else {
                hideComments.current.style.height = 'auto'
            }
        }
    }

    if (!currentVideo) {
        currentVideo = videoList[0]
        console.log("running")
    }

    //! React Hooks {{ useEffects }}
    useEffect(() => {
        fetchComments()
    }, [])

    return (
        currentVideo && <div className='playVideo'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h3>{currentVideo.snippet.title}</h3>
            <p>{currentVideo.statistics.viewCount} views &bull; {moment(currentVideo.snippet.publishedAt).fromNow()} <button className='moreDetail'>...more</button></p>
            <div className='channel-detail flex space-between'>
                <div className='flex align-center'>
                    <div>
                        <div>
                            <img src={myImage} alt="" />
                        </div>
                    </div>
                    <p>{currentVideo.snippet.channelTitle} &bull; <span>34K Subscribers</span></p>
                </div>
                <button>Subscribe</button>
            </div>
            <hr />
            <div className="action flex align-center">
                <div>
                    <button><i className='bx bx-like'></i><span>{valueConverter(currentVideo.statistics.likeCount)}</span></button>
                    <button><i className='bx bx-dislike'></i></button>
                </div>
                <button><i className='bx bx-share bx-flip-horizontal' ></i><span>Share</span></button>
                <button><i className='bx bx-save' ></i><span>Save</span></button>
            </div>
            <hr />
            <div className="commnet-container">
                <div className="comment-count flex">
                    <span>{valueConverter(currentVideo.statistics.commentCount)} Comments</span>
                    <div onClick={manageComments} className="hide-comments">
                        <i className='bx bx-down-arrow-alt'></i>
                    </div>
                </div>
                <div className="sort-comments">
                    <button>Top</button>
                    <button>Newest</button>
                </div>
                <div className="add-comment">
                    <div>
                        <img src={myImage} alt="" />
                    </div>
                    <input type="text" placeholder='Add a comment' />
                </div>
                <hr />
                <div ref={hideComments} className="comments">
                    {commentList.map((comment, index) => {
                        return (
                            <div key={index} className="comment-card flex">
                                <div>
                                    <div>
                                        <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p>{comment.snippet.topLevelComment.snippet.authorDisplayName} &bull; {moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</p>
                                        <p className='commentText'>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                                    </div>
                                    <div className="comment-action flex">
                                        <button><i className='bx bx-like'></i><span>{valueConverter(comment.snippet.topLevelComment.snippet.likeCount)}</span></button>
                                        <button><i className='bx bx-dislike'></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlayVideo