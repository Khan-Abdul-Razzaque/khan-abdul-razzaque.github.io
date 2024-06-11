async function fetchDetails() {
    let details = await fetch("videos.json");
    let response = await details.json();
    // console.log(response);
    return response;
}

async function main() {
    //     // Adding an event listener to toggle bar.
    //     toggleBar.addEventListener('click', () => {
    //         sideBar.classList.toggle('mini-sidebar');
    //         video_container.classList.toggle('big-video-container');
    //         m_s_item.classList.toggle('hidden');
    //     });

    //     // Fetching video from the folder.
    //     let links = document.querySelectorAll('.videos a');
    //     links.forEach(link => {
    //         link.href = "video_page.html";
    //     });

    //     // Adding event listener to tabs
    //     let tabs = document.querySelectorAll('.tab');
    //     let previousTab = null;
    //     tabs.forEach(tab => {
    //         tab.addEventListener('click',function() {
    //             if (previousTab != null) {
    //                 previousTab.classList.remove('white-tab');
    //             }
    //             this.classList.toggle('white-tab');

    //             previousTab = this;
    //         })

    //     })
    
    let videos = await fetchDetails();
    // console.log(typeof videos)
    for (const key in videos) {
        let value = videos[key];
        let video = `<a class="links" href="video_page.html">
                        <div class="video">
                            <div class="thumbnail flex">
                                <img src="${value.thumbnail}"
                                    alt="">
                            </div>
                            <div class="video-info flex">
                                <div class="channel-icon">
                                    <img src="${value.thumbnail}"
                                        alt="">
                                </div>
                                <div class="vd-detail">
                                    <p>${value.title}</p>
                                    <p>${value.channleName}</p>
                                    <p>${value.views}</p>
                                </div>
                            </div>
                        </div> 
                    </a>`
        document.querySelector('.videos').insertAdjacentHTML('beforeend', video)
    }
}

// Invoking main function to start the script.
main();