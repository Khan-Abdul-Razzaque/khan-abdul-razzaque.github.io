// export const API_KEY = 'AIzaSyA5x-vvMVZMxyTgVsuBoTfNe72blOfkv80';
export const API_KEY = 'AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU';
export const valueConverter = (value) => {
    if (value >= 1000000) {
        return Math.ceil(value / 10000000) + "M";
    }
    else if (value >= 1000) {
        return Math.ceil(value / 1000) + "K";
    }
    else {
        return value;
    }
}

export const saveHistory = (item) => {
    let hisVideoList = [];
    let parsedHisVideoList
    if (localStorage.length === 0) {
        hisVideoList.unshift(item);
        parsedHisVideoList = JSON.stringify(hisVideoList);
        localStorage.setItem("hisVideoList", parsedHisVideoList);
    }
    else {
        parsedHisVideoList = localStorage.getItem("hisVideoList");
        hisVideoList = JSON.parse(parsedHisVideoList);
        hisVideoList = hisVideoList.filter((video) => { return video.id !== item.id })
        hisVideoList.unshift(item);
        parsedHisVideoList = JSON.stringify(hisVideoList);
        localStorage.setItem("hisVideoList", parsedHisVideoList);
    }
}

export const displayHisVideos = () => {
    if (localStorage.length !== 0) {
        return JSON.parse(localStorage.getItem("hisVideoList"));
    }
    else {
        return false;
    }
}

export const deleteHisVideo = (currentTarget, videoId) => {
    currentTarget.style.transform = "translate(-100%) scale(1, 0)";
    setTimeout(() => {
        currentTarget.remove()
    }, 200);

    let hisVideoList = [];
    let parsedHisVideoList;
    parsedHisVideoList = localStorage.getItem("hisVideoList");
    hisVideoList = JSON.parse(parsedHisVideoList);
    hisVideoList = hisVideoList.filter((video) => { return video.id !== videoId })
    parsedHisVideoList = JSON.stringify(hisVideoList);
    localStorage.setItem("hisVideoList", parsedHisVideoList);
}