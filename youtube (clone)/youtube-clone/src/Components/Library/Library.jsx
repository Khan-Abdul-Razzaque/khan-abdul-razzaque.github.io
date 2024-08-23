import React from 'react'
import './Library.css'

const Library = ({ toggleSidebar, setHomePageControl }) => {
    return (
        <div className={`library ${toggleSidebar ? 'big-library' : ''}`}>
            <div>
                <div className="row-title flex space-between align-center">
                    <div>History</div>
                    <button onClick={()=> setHomePageControl(1)}>View all</button>
                </div>
                <div className="row flex history-row">
                    <div className="you-vid-card his-vid-card">
                        <div className="thumbnail">
                            <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                        </div>
                        <div className="his-vid-info">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati quaerat beatae accusamus fugit officiis. Reiciendis odio natus aliquam eveniet nulla voluptatibus neque?</p>
                            <p>Channel Name &bull; Views</p>
                        </div>
                    </div>
                    <div className="you-vid-card his-vid-card">
                        <div className="thumbnail">
                            <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                        </div>
                        <div className="his-vid-info">
                            <p>Title</p>
                            <p>Channel Name &bull; Views</p>
                        </div>
                    </div>
                    <div className="you-vid-card his-vid-card">
                        <div className="thumbnail">
                            <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                        </div>
                        <div className="his-vid-info">
                            <p>Title</p>
                            <p>Channel Name &bull; Views</p>
                        </div>
                    </div>
                    <div className="you-vid-card his-vid-card">
                        <div className="thumbnail">
                            <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                        </div>
                        <div className="his-vid-info">
                            <p>Title</p>
                            <p>Channel Name &bull; Views</p>
                        </div>
                    </div>
                    <div className="you-vid-card his-vid-card">
                        <div className="thumbnail">
                            <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                        </div>
                        <div className="his-vid-info">
                            <p>Title</p>
                            <p>Channel Name &bull; Views</p>
                        </div>
                    </div>
                    <div className="you-vid-card his-vid-card">
                        <div className="thumbnail">
                            <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                        </div>
                        <div className="his-vid-info">
                            <p>Title</p>
                            <p>Channel Name &bull; Views</p>
                        </div>
                    </div>
                    <div className="you-vid-card his-vid-card">
                        <div className="thumbnail">
                            <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                        </div>
                        <div className="his-vid-info">
                            <p>Title</p>
                            <p>Channel Name &bull; Views</p>
                        </div>
                    </div>
                    <div className="you-vid-card his-vid-card">
                        <div className="thumbnail">
                            <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                        </div>
                        <div className="his-vid-info">
                            <p>Title</p>
                            <p>Channel Name &bull; Views</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className="row-title flex space-between align-center">
                    <div>Playlists</div>
                    <button>View all</button>
                </div>
                <div className="row flex playlist-row">
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                    <div className="box flex">
                        <img src="https://i.ytimg.com/vi/0ZdZxUqRXYM/mqdefault.jpg" alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Library
