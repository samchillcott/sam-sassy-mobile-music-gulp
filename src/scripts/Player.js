class Player {
	constructor(albums) {
		this.playing = false;
		this.showProgress = null;
		this.currentMins = 0;
		this.currentSeconds = 0;
		this.albums = albums;
		this.currentTrack = this.albums[0];
		this.repeatTrack = false;
		this.randomTrack = false;
	}

	random = () => {
		if (!this.randomTrack) {
			this.randomTrack = true;
			random.classList.add("selected");
		} else {
			this.randomTrack = false;
			random.classList.remove("selected");
		}
	};

	backward = () => {
		player.currentTime -= 3;
		this.currentSeconds -= 3;

		if (this.currentSeconds === -3 && player.currentTime > 3) {
			this.currentSeconds = 57;
			this.currentMins -= 1;
		}

		if (this.currentSeconds === -2 && player.currentTime > 3) {
			this.currentSeconds = 58;
			this.currentMins -= 1;
		}

		if (this.currentSeconds === -1 && player.currentTime > 3) {
			this.currentSeconds = 59;
			this.currentMins -= 1;
		}

		if (this.currentSeconds < 0 && player.currentTime < 3) {
			this.currentSeconds = 0;
		}

		console.log(this.currentSeconds + " : " + this.currentMins);
	};

	incCurrentTime = () => {
		const timeNumber = player.currentTime / player.duration;
		const time = timeNumber.toString();
		const calcPercentages = Number(time).toFixed(2).toString().substr(2, 3);
		if (calcPercentages < 10) {
			progress.style.width = `${calcPercentages.charAt(1)}%`;
		} else {
			progress.style.width = `${calcPercentages}%`;
		}

		this.currentSeconds++;
		if (this.currentSeconds >= 60) {
			this.currentMins++;
			this.currentSeconds = 0;
		}

		const currentTime = document.getElementById("current-time");
		currentTime.innerHTML = `${this.currentMins}:${
			this.currentSeconds < 10 ? "0" + this.currentSeconds : this.currentSeconds
		}`;
		const isTrackFinished = player.currentTime >= player.duration - 1;

		if (isTrackFinished) {
			clearInterval(this.showProgress);
			this.playing = false;
			this.currentMins = 0;
			this.currentSeconds = 0;
			progress.style.width = 0;
			play.classList = "fas fa-play";
			currentTime.innerHTML = `${this.currentMins}:0${this.currentSeconds}`;

			if (this.repeatTrack) {
				this.play();
				return;
			}

			if (this.randomTrack) {
				const randomTrackNum = Math.floor(Math.random() * this.albums.length);
				this.currentTrack = this.albums[randomTrackNum];
				this.initTrack();
				this.play();
			}
		}
	};

	play = () => {
		if (this.playing) {
			player.pause();
			play.classList = "fas fa-play playing";
			this.playing = false;
			clearInterval(this.showProgress);
		} else {
			player.play();
			play.classList = "fas fa-pause";
			this.playing = true;
			this.showProgress = setInterval(this.incCurrentTime, 1000);
		}
	};

	forward = () => {
		player.currentTime += 3;
		this.currentSeconds += 3;
		if (this.currentSeconds >= 60) {
			this.currentSeconds = 0;
			this.currentMins++;
		}
	};

	repeat = () => {
		if (this.repeatTrack) {
			this.repeatTrack = false;
			repeat.classList.remove("selected");
		} else {
			this.repeatTrack = true;
			repeat.classList.add("selected");
		}
	};

	displayTrackTime() {
		let secs = Number(player.duration);
		let divMins = secs % (60 * 60);

		let mins = Math.floor(divMins / 60);

		let divSecs = divMins % 60;
		let seconds = Math.ceil(divSecs);

		document.getElementById("track-time").innerHTML = `${mins}:${
			seconds < 10 ? "0" + seconds : seconds
		}`;
	}

	setCurrentTrack = (track) => {
		const idArr = this.albums.map((album) => album.id);
		const trackIndex = idArr.indexOf(track.id);
		this.currentTrack = this.albums[trackIndex];
		this.play();
		this.currentMins = 0;
		this.currentSeconds = 0;
		this.initTrack();
		this.play();
	};

	initTrack = () => {
		player.src = this.currentTrack.src;
		albumCover.src = this.currentTrack.albumCover;
		currentTitle.innerHTML = this.currentTrack.trackTitle;
		currentAlbumBand.innerHTML = `${this.currentTrack.albumTitle} - ${this.currentTrack.bandTitle}`;
		player.load();
	};
}
