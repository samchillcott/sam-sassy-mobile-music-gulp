const albumArt1 = "images/album-art1.jpg";
const albumArt2 = "images/album-art2.jpg";
const albumArt3 = "images/album-art3.jpg";
const albumArt4 = "images/album-art4.jpg";
const albumArt5 = "images/album-art5.jpg";
const albumArt6 = "images/album-art6.jpg";
const albumArt7 = "images/album-art7.jpg";
const albumArt8 = "images/album-art8.jpg";
const albumArt9 = "images/album-art9.jpg";
const albumArt10 = "images/album-art10.jpg";

// for generating a random id
const randId = () => {
	return Math.random()
		.toString(36)
		.replace(/[^a-z]+/g, "")
		.substr(2, 10);
};

const albums = [
	{
		trackTitle: "Come Get Some",
		albumTitle: "Final draft",
		bandTitle: "Tranquil Collective",
		albumCover: albumArt1,
		trackTimeMins: 3,
		trackTimeSeconds: 20,
		src: "tracks/come_get_some.mp3",
		id: randId(),
	},
	{
		trackTitle: "End of Summer",
		albumTitle: "Army of ants",
		bandTitle: "Marching Revolution",
		albumCover: albumArt2,
		trackTimeMins: 2,
		trackTimeSeconds: 21,
		src: "tracks/end_of_summer.mp3",
		id: randId(),
	},
	{
		trackTitle: "Etheral",
		albumTitle: "Bag of mysteries",
		bandTitle: "Augmented Romance",
		albumCover: albumArt3,
		trackTimeMins: 2,
		trackTimeSeconds: 52,
		src: "tracks/ethereal.mp3",
		id: randId(),
	},
	{
		trackTitle: "Flamethrower",
		albumTitle: "Fifth chance",
		bandTitle: "Dragons",
		albumCover: albumArt4,
		trackTimeMins: 2,
		trackTimeSeconds: 31,
		src: "tracks/flamethrower.mp3",
		id: randId(),
	},
	{
		trackTitle: "Hit it",
		albumTitle: "Bursted bubble",
		bandTitle: "Fluke",
		albumCover: albumArt5,
		trackTimeMins: 1,
		trackTimeSeconds: 59,
		src: "tracks/hit_it.mp3",
		id: randId(),
	},
	{
		trackTitle: "Hyperdrive",
		albumTitle: "Blissful ignorance",
		bandTitle: "Liberty",
		albumCover: albumArt6,
		trackTimeMins: 2,
		trackTimeSeconds: 12,
		src: "tracks/hyperdrive.mp3",
		id: randId(),
	},
	{
		trackTitle: "It Makes Me Smile",
		albumTitle: "Battleborn",
		bandTitle: "Oblivion",
		albumCover: albumArt7,
		trackTimeMins: 4,
		trackTimeSeconds: 44,
		src: "tracks/it_makes_me_smile.mp3",
		id: randId(),
	},
	{
		trackTitle: "Not All That Wander",
		albumTitle: "Apparatus",
		bandTitle: "Charm of Myth",
		albumCover: albumArt8,
		trackTimeMins: 3,
		trackTimeSeconds: 32,
		src: "tracks/not_all_that_wander.mp3",
		id: randId(),
	},
	{
		trackTitle: "Time for Rag",
		albumTitle: "No celebration",
		bandTitle: "Author of Riddles",
		albumCover: albumArt9,
		trackTimeMins: 1,
		trackTimeSeconds: 45,
		src: "tracks/time_for_rag.mp3",
		id: randId(),
	},
	{
		trackTitle: "Ultraviolet",
		albumTitle: "Cat got my tongue",
		bandTitle: "Darlings of Turmoil",
		albumCover: albumArt10,
		trackTimeMins: 3,
		trackTimeSeconds: 25,
		src: "tracks/ultraviolet.mp3",
		id: randId(),
	},
];

const playlistToggle = document.getElementById("playlist-toggle-nav");
const playlistToggleDesktop = document.getElementById(
	"playlist-toggle-desktop"
);
const playlist = document.getElementById("playlist");
const tracksList = document.getElementById("tracklist");
const desktopToggleIcon = document.getElementById("toggle-icon");

let playlistUp = false;
let playlistOpen = false;
let track;

const togglePlaylistNav = () => {
	if (!playlistUp) {
		playlist.style.animation = "mobile-playlist-open 0.2s";
		playlist.style.top = 0;

		playlistToggle.style.boxShadow = " 0 3px 4px -3px #1C1E28";
		playlistUp = true;
		albums.forEach((album) => {
			tracksList.innerHTML += `
                <div class="track" id="${album.id}">
                    <div class="upper">
                        <h4 class="track-name">${album.trackTitle}</h4>
                        <span class="track-time">${album.trackTimeMins}:${album.trackTimeSeconds}</span>
                    </div>
                    <div class="below">
                        <p class="album-and-band">${album.albumTitle} - ${album.bandTitle}</p>
                    </div>
                </div>
            `;
		});
		track = document.querySelectorAll(".track");
		track.forEach((track) => {
			track.addEventListener("click", (e) => {
				if (e.target.className === "track") {
					PlayerClass.setCurrentTrack(e.target);
					return;
				}

				if (e.target.parentElement.className === "track") {
					PlayerClass.setCurrentTrack(e.target.parentElement);
					return;
				}

				if (e.target.parentElement.parentElement.className === "track") {
					PlayerClass.setCurrentTrack(e.target.parentElement.parentElement);
					return;
				}
			});
		});
	} else {
		playlist.style.animation = "mobile-playlist-close 0.2s";
		playlist.style.top = null;
		playlist.style.bottom = 0;
		playlistToggle.style.boxShadow = null;
		tracksList.innerHTML = "";
		playlistUp = false;
	}
};

const togglePlaylistNavDesktop = () => {
	if (!playlistOpen) {
		playlist.style.animation = "desktop-playlist-open 0.2s";
		playlist.style.width = "20%";
		playlistOpen = true;
		desktopToggleIcon.classList = "fas fa-angle-left";

		albums.forEach((album) => {
			tracksList.innerHTML += `
                <div class="track" id="${album.id}">
                    <div class="upper">
                        <h4 class="track-name">${album.trackTitle}</h4>
                        <span class="track-time">${album.trackTimeMins}:${album.trackTimeSeconds}</span>
                    </div>
                    <div class="below">
                        <p class="album-and-band">${album.albumTitle} - ${album.bandTitle}</p>
                    </div>
                </div>
            `;
		});

		track = document.querySelectorAll(".track");
		track.forEach((track) => {
			track.addEventListener("click", (e) => {
				if (e.target.className === "track") {
					PlayerClass.setCurrentTrack(e.target);
					return;
				}

				if (e.target.parentElement.className === "track") {
					PlayerClass.setCurrentTrack(e.target.parentElement);
					return;
				}

				if (e.target.parentElement.parentElement.className === "track") {
					PlayerClass.setCurrentTrack(e.target.parentElement.parentElement);
					return;
				}
			});
		});
	} else {
		playlist.style.animation = "desktop-playlist-close 0.2s";
		playlist.style.width = "4%";
		desktopToggleIcon.classList = "fas fa-angle-right";
		playlistOpen = false;
		tracksList.innerHTML = "";
	}
};

playlistToggle.addEventListener("click", togglePlaylistNav);
playlistToggleDesktop.addEventListener("click", togglePlaylistNavDesktop);

// PLAYER RELATED CODE
const PlayerClass = new Player(albums);
let player = new Audio();
player.src.type = "audio/mpeg";
player.src = "tracks/come_get_some.mp3";
player.load();
//const player = document.getElementById('player');
const random = document.getElementById("random");
const backward = document.getElementById("backward");
const play = document.getElementById("play");
const forward = document.getElementById("forward");
const repeat = document.getElementById("repeat");
const currentTitle = document.getElementById("current-title");
const currentAlbumBand = document.getElementById("current-album-band");
const albumCover = document.getElementById("album-cover");
window.onload = () => player.load();

if (playlistOpen || playlistUp) {
	track = document.querySelectorAll(".track");
}

player.addEventListener("loadeddata", () => {
	if (player.readyState >= 2) {
		document.getElementById("track-times").style.opacity = 1;
		PlayerClass.displayTrackTime();
	}
});

// Event listeners
random.addEventListener("click", PlayerClass.random);
backward.addEventListener("click", PlayerClass.backward);
play.addEventListener("click", PlayerClass.play);
forward.addEventListener("click", PlayerClass.forward);
repeat.addEventListener("click", PlayerClass.repeat);
//PlayerClass.initTrack();
// player.currentTime / player.duration
