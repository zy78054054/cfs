function playSong(song) {
    const audio = document.getElementById('audio');
    audio.src = song;
    audio.play();
}
