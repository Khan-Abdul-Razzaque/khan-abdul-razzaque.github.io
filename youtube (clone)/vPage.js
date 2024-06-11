let moreVideos = document.querySelectorAll('.cards a')

for (const a of moreVideos) {
    a.href = "video_page.html"
}

document.querySelector('.videoBox video').play();

toggleBar.addEventListener('click', () => {
   document.querySelector('.vp-sidebar').classList.toggle("hidden-sidebar");
})