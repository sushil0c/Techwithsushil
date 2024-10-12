const urlParams = new URLSearchParams(window.location.search);
const videoID = urlParams.get('id');
document.getElementById('video').src = `https://www.youtube.com/embed/${videoID}`;

document.getElementById('play').onclick = () => document.getElementById('video').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
document.getElementById('pause').onclick = () => document.getElementById('video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
document.getElementById('rewind').onclick = () => /* Implement rewind functionality */;
document.getElementById('fastForward').onclick = () => /* Implement fast forward functionality */;
document.getElementById('equalizer').onclick = () => /* Implement equalizer functionality */;
document.getElementById('speed').onclick = () => /* Implement speed functionality */;
document.getElementById('darkMode').onclick = () => document.body.classList.toggle('dark');