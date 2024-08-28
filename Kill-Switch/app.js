const playPauseButton = document.getElementById('play-pause');
const songTitle = document.getElementById('song-title');
const albumArt = document.getElementById('album-art');
let audio;
let currentSongIndex = 0;
let songs = [];

let isPlaying = false;

// Initialize LaunchDarkly client
const ldClient = LDClient.initialize(process.env.LAUNCHDARKLY_CLIENT_ID, { anonymous: true });


ldClient.on('ready', () => {
    playPauseButton.addEventListener('click', togglePlayPause);
    loadSongs();
});

function loadSongs() {
    fetch('songs.json')
        .then(response => response.json())
        .then(data => {
            songs = data;
            loadSong(currentSongIndex);
        });
}

function loadSong(index) {
    const song = songs[index];
    audio = new Audio(`audio/${song.file}`);
    songTitle.textContent = song.title;
    albumArt.src = `images/${song.artwork}`;
    albumArt.alt = `${song.title} album artwork`;
}

function togglePlayPause() {
    ldClient.variation('enable-music-player', false, (err, showFeature) => {
        if (showFeature) {
            if (isPlaying) {
                audio.pause();
                playPauseButton.textContent = 'Play';
            } else {
                audio.play();
                playPauseButton.textContent = 'Pause';
            }
            isPlaying = !isPlaying;
        } else {
            alert('Sorry, the music player is currently disabled.');
        }
    });
}

audio.addEventListener('play', () => {
    songTitle.textContent = 'Now Playing: Your Song Title';
});

audio.addEventListener('pause', () => {
    songTitle.textContent = 'Paused: Your Song Title';
});
