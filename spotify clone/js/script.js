// Fetching song folder / Playlist.
async function fetchFolders() {
    let fetchFolder = await fetch("/songs");
    let response = await fetchFolder.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let folders = [];
    let anchorTags = div.getElementsByTagName('a');
    for (const anchorTag of anchorTags) {
        if (anchorTag.href.includes("/songs/")) {
            folders.push(anchorTag.href.replace('/spotify%20clone', ''));
        }
    }
    return folders;
}

// Fetching all mp3 file from the server.
async function fetchSongs(folderName) {
    let fetchedFile = await fetch(`${folderName}`);
    let response = await fetchedFile.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let songs = [];
    let anchorTags = div.getElementsByTagName('a');
    for (const anchorTag of anchorTags) {
        if (anchorTag.href.endsWith(".mp3")) {
            songs.push(anchorTag.href);
        }
    }
    return songs;
}

// Playing audio.
function playSong(url) {
    currentSong.src = url;
    currentSong.play();
}

// let's update time of the audio.
let tenthsPlace = 0, unitPlace = 0, minutePlace = 0;
let currentTime = document.querySelector('.time');
function timeUpdate() {
    interval = setInterval(() => {
        minutePlace = ((parseInt(currentSong.currentTime) - (parseInt(currentSong.currentTime) % 60)) / 60);
        unitPlace = (parseInt(currentSong.currentTime) - minutePlace * 60) % 10;
        tenthsPlace = ((parseInt(currentSong.currentTime) - unitPlace) - minutePlace * 60) / 10;

        currentTime.innerHTML = `<div class="current-time">
                                    <span>${minutePlace}</span>
                                    <span>:</span>
                                    <span>${tenthsPlace}${unitPlace}</span>
                                </div>
                                <div style="transform: scale(1.6);" class="separator">
                                    <span style="font-weight: 900">/</span>
                                </div>
                                <div class="duration">
                                    <span>${((currentSong.duration) - (currentSong.duration) % 60) / 60}</span>
                                    <span>:</span>
                                    <span>${parseInt((currentSong.duration)) % 60}</span>
                                </div>`;
    }, 1000);
}

// Adding event listener to seekBar ball.
let timeOver = document.querySelector('.time-over');
function updateSeekBar() {
    interval_1 = setInterval(() => {
        timeOver.style.width = `${(currentSong.currentTime / currentSong.duration) * 100}%`;
        if (currentSong.currentTime == currentSong.duration) {
            togglePlayState();
        }
    }, 200);
}


// PlayPause Function
let playPauseBtn = document.querySelector('.play-pause');
function togglePlayState() {
    if (currentSong.currentTime == currentSong.duration) {
        playPauseBtn.querySelector('img').src = "imgs/play.svg";
        clearInterval(interval);
        clearInterval(interval_1);
        return;
    }
    if (currentSong.paused && currentSong.src != "") {
        currentSong.play();
        playPauseBtn.querySelector('img').src = "imgs/pause.svg";
        playPauseBtn.getAttribute('title', "Play");
        timeUpdate();
        updateSeekBar();
    }
    else if (!currentSong.paused) {
        currentSong.pause();
        playPauseBtn.querySelector('img').src = "imgs/play.svg";
        playPauseBtn.getAttribute('title', "Pause");
        clearInterval(interval);
        clearInterval(interval_1);
    }

}

// Adding event listener to seekBar line.
let line = document.querySelector('.line');
line.addEventListener('click', (e) => {
    if (currentSong.src != "") {
        currentSong.currentTime = `${(e.offsetX / e.currentTarget.getBoundingClientRect().width) * currentSong.duration}`;
    }
})


// Driver Function of the program.
async function driver() {
    let folders = await fetchFolders();
    folders.forEach(async (folder) => {
        let files = await fetch(folder);
        let response = await files.text();
        let div = document.createElement('div');
        div.innerHTML = response;
        let anchorTags = div.getElementsByTagName('a');
        for (const anchorTag of anchorTags) {
            if (anchorTag.href.includes("info.json")) {
                let infoJson = await fetch(anchorTag.href);
                let iJResponse = await infoJson.json();
                let playlistInfo = iJResponse;
                let folderBox = document.createElement('div');
                folderBox.innerHTML = `<div style="background: url('${anchorTag.href.replace('info.json', 'thumbnail.jpg')}'); background-repeat: no-repeat; background-position: center center; background-size: cover;" class="image flex">

                                    </div>
                                    <div class="title">
                                        <h3>${playlistInfo.title}</h3>
                                    </div>
                                    <div class="description">
                                        <span>${playlistInfo.description}</span>
                                    </div>`;
                folderBox.classList = "playlist br-10"
                document.querySelector('.playlists').insertAdjacentElement('beforeend', folderBox);
            }
        }
    });

    folderName = "/mp3s";
    let songs = await fetchSongs(folderName);
    songs.forEach((song) => {
        let songRow = `<div class="song flex align-center space-between">
                        <div class="m-icon-s-name flex align-center">
                            <div class="music-icon flex">
                                <img class="invert select-none" src="imgs/music.svg" alt="">
                            </div>
                            <div class="song-name">
                                <span>${song.split('/')[song.split('/').length - 1].replaceAll("%20", ' ').replace(".mp3", '')}</span>
                            </div>
                        </div>
                        <div class="play-icon flex align-center">
                            <span>play</span>
                            <img class="invert select-none" src="imgs/play.svg" alt="">
                        </div>
                    </div>`;
        document.querySelector('.song-container').insertAdjacentHTML('beforeend', songRow);
    });

    // Adding event listener to play button.
    let playButton = document.querySelectorAll('.play-icon');
    let previousButton = null;
    playButton.forEach(button => {
        button.addEventListener('click', () => {
            if (previousButton != null) {
                previousButton.querySelector('span').innerHTML = 'play';
                previousButton.querySelector('img').src = "imgs/play.svg";
                previousButton.style.backgroundColor = '';
            }

            let butParent = button.parentElement.querySelector('.m-icon-s-name .song-name span');
            let file = butParent.innerHTML + ".mp3";
            document.querySelector('.pc-song-name span').innerHTML = butParent.innerHTML;
            playSong(`${folderName}/${file}`);
            button.querySelector('span').innerHTML = 'pause';
            button.querySelector('img').src = "imgs/pause.svg";
            button.style.backgroundColor = 'rgb(43, 107, 22)';
            previousButton = button;
            document.querySelector('.play-pause img').src = "imgs/pause.svg";
            tenthsPlace = unitPlace = minutePlace = 0;
            timeUpdate();
            updateSeekBar();
            let notAllowedBtn = [playPauseBtn, nextSong, previousSong, volume, line];
            notAllowedBtn.forEach(btn => {
                btn.style.cursor = "pointer";
            })
            currentSong.volume = parseInt(document.querySelector('.range > div input').value) / 100;
        })
    })

    // Adding event listener to play/pause button.
    playPauseBtn.addEventListener('click', togglePlayState);

    //Adding event listener to previous button.
    let previousSong = document.querySelector('.previous-song');
    previousSong.addEventListener('click', () => {
        for (const key in songs) {
            const element = songs[key];
            if (currentSong.src == element) {
                if (songs.indexOf(element) > 0) {
                    if (songs.indexOf(element) == 1) {
                        previousSong.style.cursor = "not-allowed";
                    }
                    if (!currentSong.paused) {
                        playSong(songs[parseInt(key) - 1]);
                    }
                    else {
                        currentSong.src = songs[parseInt(key) - 1];
                    }
                    break;
                }
                else {
                    alert('No more previous songs');
                }
            }
        }
    })


    //Adding event listener to next button.
    let nextSong = document.querySelector('.next-song');
    nextSong.addEventListener('click', () => {
        for (const key in songs) {
            const element = songs[key];
            if (currentSong.src == element) {
                if (songs.indexOf(element) < songs.length - 1) {
                    if (songs.indexOf(element) == songs.length - 2) {
                        nextSong.style.cursor = "not-allowed";
                    }
                    if (!currentSong.paused) {
                        playSong(songs[parseInt(key) + 1]);
                    }
                    else {
                        currentSong.src = songs[parseInt(key) + 1];
                    }
                    break;
                }
                else {
                    alert('No more new songs');
                }
            }
        }
    })

    // Adding event listener to volume.
    let volume = document.querySelector('.volume-icon');
    volume.addEventListener('click', () => {
        let volumeIcon = volume.querySelector('img');
        if (volumeIcon.src.split('/')[volumeIcon.src.split('/').length - 1] === 'volume.svg' && volume.style.cursor == "pointer") {
            volume.querySelector('img').src = "imgs/mute.svg";
            currentSong.volume = 0;
        }
        else if (volume.style.cursor == "pointer") {
            volume.querySelector('img').src = "imgs/volume.svg";
            currentSong.volume = parseInt(document.querySelector('.range > div input').value) / 100;
        }
        if (volume.style.cursor == "pointer") {
            if (timeout != "undefined") {
                clearTimeout(timeout);
            }
            volume_value.innerHTML = `${parseInt(currentSong.volume * 100)}` + '%';
            volume_value.style.transform = 'scale(1, 1)';
            timeout = setTimeout(() => {
                volume_value.style.transform = 'scale(0, 0)';
            }, 3000);
        }
    })

    // Adding event listener on volume seekBar
    let volume_range = document.querySelector('.range > div input');
    let volume_value = document.querySelector('.volume-value');

    volume_range.addEventListener('change', () => {
        currentSong.volume = parseInt(volume_range.value) / 100;
        if (volume.style.cursor == "pointer") {
            if (parseInt(currentSong.volume * 100) > 75) {
                volume_value.style.backgroundColor = "#aa0000";
                volume_value.style.color = "white";
                document.querySelector('.range > div').style.backgroundColor = "#aa000090";
            }
            else {
                volume_value.style.backgroundColor = "#009100";
                volume_value.style.color = "black";
                document.querySelector('.range > div').style.backgroundColor = "#00910090";
            }
            if (timeout != "undefined") {
                clearTimeout(timeout);
            }
            volume_value.innerHTML = `${parseInt(currentSong.volume * 100)}` + '%';
            volume_value.style.transform = 'scale(1, 1)';
            timeout = setTimeout(() => {
                volume_value.style.transform = 'scale(0, 0)';
            }, 3000);
        }
        if (volume_range.value == "0") {
            volume.querySelector('img').src = 'imgs/mute.svg'
        }
        else {
            volume.querySelector('img').src = 'imgs/volume.svg'
        }
    })

    // Adding event listener on hamburger to show songs container.
    let hamburger = document.querySelector('.hamburger')
    hamburger.addEventListener('click', () => {
        document.querySelector('.spotify-left').classList.add('left-hide-vis');
        setTimeout(() => {
            document.querySelector('.hide-left').style.opacity = "1";
        }, 320);
    })

    // Adding event listener on hamburger to hide songs container.
    let close = document.querySelector('.hide-left');
    close.addEventListener('click', () => {
        document.querySelector('.spotify-left').classList.remove('left-hide-vis');
        close.style.opacity = "0";
    })

    // Adding controls using keyboard.
    document.addEventListener('keydown', (key) => {
        if (key.key === " ") {
            togglePlayState()
        }
    })

    // Adding event listener to change song playlist.
    // let playlists = document.querySelectorAll('.playlist');
    // playlists.forEach(playlist => {
    //     playlist.addEventListener('click', () => {

    //     })
    // })
}

let interval; // Interval for current time.
let interval_1; // Interval for seekBar.
let timeout; // Timeout for volume value.
let currentSong = new Audio()
let folderName;
driver()