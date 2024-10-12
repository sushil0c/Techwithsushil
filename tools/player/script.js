let videoIDs = [];

async function fetchVideoIDs() {
    const response = await fetch('videos.json');
    const data = await response.json();
    videoIDs = data.videoIDs;
    loadThumbnails();
}

function loadThumbnails() {
    const thumbnailsDiv = document.getElementById('thumbnails');
    videoIDs.forEach(id => {
        const img = document.createElement('img');
        img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        img.onclick = () => window.location.href = `video.html?id=${id}`;
        thumbnailsDiv.appendChild(img);
    });
}

document.getElementById('searchBtn').addEventListener('click', function() {
    const inputID = document.getElementById('search').value;
    if (videoIDs.includes(inputID)) {
        window.location.href = `video.html?id=${inputID}`;
    } else {
        alert('Video ID not found!');
    }
});

window.onload = fetchVideoIDs;