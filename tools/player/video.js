let player;
const urlParams = new URLSearchParams(window.location.search);
const videoID = urlParams.get('id');

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        height: '360',
        width: '640',
        videoId: videoID,
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('play').onclick = () => player.playVideo();
    document.getElementById('pause').onclick = () => player.pauseVideo();
    document.getElementById('rewind').onclick = () => player.seekTo(player.getCurrentTime() - 10, true);
    document.getElementById('fastForward').onclick = () => player.seekTo(player.getCurrentTime() + 10, true);
    
    // Dark mode toggle
    document.getElementById('darkMode').onclick = () => {
        document.body.classList.toggle('dark');
        const isDarkMode = document.body.classList.contains('dark');
        document.getElementById('darkMode').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    };
}