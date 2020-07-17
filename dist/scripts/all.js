class Player{constructor(t){this.playing=!1,this.showProgress=null,this.currentMins=0,this.currentSeconds=0,this.albums=t,this.currentTrack=this.albums[0],this.repeatTrack=!1,this.randomTrack=!1}random=()=>{this.randomTrack?(this.randomTrack=!1,random.classList.remove("selected")):(this.randomTrack=!0,random.classList.add("selected"))};backward=()=>{player.currentTime-=3,this.currentSeconds-=3,-3===this.currentSeconds&&player.currentTime>3&&(this.currentSeconds=57,this.currentMins-=1),-2===this.currentSeconds&&player.currentTime>3&&(this.currentSeconds=58,this.currentMins-=1),-1===this.currentSeconds&&player.currentTime>3&&(this.currentSeconds=59,this.currentMins-=1),this.currentSeconds<0&&player.currentTime<3&&(this.currentSeconds=0),console.log(this.currentSeconds+" : "+this.currentMins)};incCurrentTime=()=>{const t=(player.currentTime/player.duration).toString(),e=Number(t).toFixed(2).toString().substr(2,3);progress.style.width=e<10?e.charAt(1)+"%":e+"%",this.currentSeconds++,this.currentSeconds>=60&&(this.currentMins++,this.currentSeconds=0);const a=document.getElementById("current-time");a.innerHTML=`${this.currentMins}:${this.currentSeconds<10?"0"+this.currentSeconds:this.currentSeconds}`;if(player.currentTime>=player.duration-1){if(clearInterval(this.showProgress),this.playing=!1,this.currentMins=0,this.currentSeconds=0,progress.style.width=0,play.classList="fas fa-play",a.innerHTML=`${this.currentMins}:0${this.currentSeconds}`,this.repeatTrack)return void this.play();if(this.randomTrack){const t=Math.floor(Math.random()*this.albums.length);this.currentTrack=this.albums[t],this.initTrack(),this.play()}}};play=()=>{this.playing?(player.pause(),play.classList="fas fa-play playing",this.playing=!1,clearInterval(this.showProgress)):(player.play(),play.classList="fas fa-pause",this.playing=!0,this.showProgress=setInterval(this.incCurrentTime,1e3))};forward=()=>{player.currentTime+=3,this.currentSeconds+=3,this.currentSeconds>=60&&(this.currentSeconds=0,this.currentMins++)};repeat=()=>{this.repeatTrack?(this.repeatTrack=!1,repeat.classList.remove("selected")):(this.repeatTrack=!0,repeat.classList.add("selected"))};displayTrackTime(){let t=Number(player.duration)%3600,e=Math.floor(t/60),a=t%60,r=Math.ceil(a);document.getElementById("track-time").innerHTML=`${e}:${r<10?"0"+r:r}`}setCurrentTrack=t=>{const e=this.albums.map(t=>t.id).indexOf(t.id);this.currentTrack=this.albums[e],this.play(),this.currentMins=0,this.currentSeconds=0,this.initTrack(),this.play()};initTrack=()=>{player.src=this.currentTrack.src,albumCover.src=this.currentTrack.albumCover,currentTitle.innerHTML=this.currentTrack.trackTitle,currentAlbumBand.innerHTML=`${this.currentTrack.albumTitle} - ${this.currentTrack.bandTitle}`,player.load()}}const albumArt1="src/static/images/album-art1.jpg",albumArt2="src/static/images/album-art2.jpg",albumArt3="src/static/images/album-art3.jpg",albumArt4="src/static/images/album-art4.jpg",albumArt5="src/static/images/album-art5.jpg",albumArt6="src/static/images/album-art6.jpg",albumArt7="src/static/images/album-art7.jpg",albumArt8="src/static/images/album-art8.jpg",albumArt9="src/static/images/album-art9.jpg",albumArt10="src/static/images/album-art10.jpg",randId=()=>Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10),albums=[{trackTitle:"Come Get Some",albumTitle:"Final draft",bandTitle:"Tranquil Collective",albumCover:albumArt1,trackTimeMins:3,trackTimeSeconds:20,src:"src/static/tracks/come_get_some.mp3",id:randId()},{trackTitle:"End of Summer",albumTitle:"Army of ants",bandTitle:"Marching Revolution",albumCover:albumArt2,trackTimeMins:2,trackTimeSeconds:21,src:"tracks/end_of_summer.mp3",id:randId()},{trackTitle:"Etheral",albumTitle:"Bag of mysteries",bandTitle:"Augmented Romance",albumCover:albumArt3,trackTimeMins:2,trackTimeSeconds:52,src:"tracks/ethereal.mp3",id:randId()},{trackTitle:"Flamethrower",albumTitle:"Fifth chance",bandTitle:"Dragons",albumCover:albumArt4,trackTimeMins:2,trackTimeSeconds:31,src:"tracks/flamethrower.mp3",id:randId()},{trackTitle:"Hit it",albumTitle:"Bursted bubble",bandTitle:"Fluke",albumCover:albumArt5,trackTimeMins:1,trackTimeSeconds:59,src:"tracks/hit_it.mp3",id:randId()},{trackTitle:"Hyperdrive",albumTitle:"Blissful ignorance",bandTitle:"Liberty",albumCover:albumArt6,trackTimeMins:2,trackTimeSeconds:12,src:"tracks/hyperdrive.mp3",id:randId()},{trackTitle:"It Makes Me Smile",albumTitle:"Battleborn",bandTitle:"Oblivion",albumCover:albumArt7,trackTimeMins:4,trackTimeSeconds:44,src:"tracks/it_makes_me_smile.mp3",id:randId()},{trackTitle:"Not All That Wander",albumTitle:"Apparatus",bandTitle:"Charm of Myth",albumCover:albumArt8,trackTimeMins:3,trackTimeSeconds:32,src:"tracks/not_all_that_wander.mp3",id:randId()},{trackTitle:"Time for Rag",albumTitle:"No celebration",bandTitle:"Author of Riddles",albumCover:albumArt9,trackTimeMins:1,trackTimeSeconds:45,src:"tracks/time_for_rag.mp3",id:randId()},{trackTitle:"Ultraviolet",albumTitle:"Cat got my tongue",bandTitle:"Darlings of Turmoil",albumCover:albumArt10,trackTimeMins:3,trackTimeSeconds:25,src:"tracks/ultraviolet.mp3",id:randId()}],playlistToggle=document.getElementById("playlist-toggle-nav"),playlistToggleDesktop=document.getElementById("playlist-toggle-desktop"),playlist=document.getElementById("playlist"),tracksList=document.getElementById("tracklist"),desktopToggleIcon=document.getElementById("toggle-icon");let track,playlistUp=!1,playlistOpen=!1;const togglePlaylistNav=()=>{playlistUp?(playlist.style.animation="mobile-playlist-close 0.2s",playlist.style.top=null,playlist.style.bottom=0,playlistToggle.style.boxShadow=null,tracksList.innerHTML="",playlistUp=!1):(playlist.style.animation="mobile-playlist-open 0.2s",playlist.style.top=0,playlistToggle.style.boxShadow=" 0 3px 4px -3px #1C1E28",playlistUp=!0,albums.forEach(t=>{tracksList.innerHTML+=`\n                <div class="track" id="${t.id}">\n                    <div class="upper">\n                        <h4 class="track-name">${t.trackTitle}</h4>\n                        <span class="track-time">${t.trackTimeMins}:${t.trackTimeSeconds}</span>\n                    </div>\n                    <div class="below">\n                        <p class="album-and-band">${t.albumTitle} - ${t.bandTitle}</p>\n                    </div>\n                </div>\n            `}),track=document.querySelectorAll(".track"),track.forEach(t=>{t.addEventListener("click",t=>{"track"!==t.target.className?"track"!==t.target.parentElement.className?"track"!==t.target.parentElement.parentElement.className||PlayerClass.setCurrentTrack(t.target.parentElement.parentElement):PlayerClass.setCurrentTrack(t.target.parentElement):PlayerClass.setCurrentTrack(t.target)})}))},togglePlaylistNavDesktop=()=>{playlistOpen?(playlist.style.animation="desktop-playlist-close 0.2s",playlist.style.width="4%",desktopToggleIcon.classList="fas fa-angle-right",playlistOpen=!1,tracksList.innerHTML=""):(playlist.style.animation="desktop-playlist-open 0.2s",playlist.style.width="20%",playlistOpen=!0,desktopToggleIcon.classList="fas fa-angle-left",albums.forEach(t=>{tracksList.innerHTML+=`\n                <div class="track" id="${t.id}">\n                    <div class="upper">\n                        <h4 class="track-name">${t.trackTitle}</h4>\n                        <span class="track-time">${t.trackTimeMins}:${t.trackTimeSeconds}</span>\n                    </div>\n                    <div class="below">\n                        <p class="album-and-band">${t.albumTitle} - ${t.bandTitle}</p>\n                    </div>\n                </div>\n            `}),track=document.querySelectorAll(".track"),track.forEach(t=>{t.addEventListener("click",t=>{"track"!==t.target.className?"track"!==t.target.parentElement.className?"track"!==t.target.parentElement.parentElement.className||PlayerClass.setCurrentTrack(t.target.parentElement.parentElement):PlayerClass.setCurrentTrack(t.target.parentElement):PlayerClass.setCurrentTrack(t.target)})}))};playlistToggle.addEventListener("click",togglePlaylistNav),playlistToggleDesktop.addEventListener("click",togglePlaylistNavDesktop);const PlayerClass=new Player(albums);let player=new Audio;player.src.type="audio/mpeg",player.src="tracks/come_get_some.mp3",player.load();const random=document.getElementById("random"),backward=document.getElementById("backward"),play=document.getElementById("play"),forward=document.getElementById("forward"),repeat=document.getElementById("repeat"),currentTitle=document.getElementById("current-title"),currentAlbumBand=document.getElementById("current-album-band"),albumCover=document.getElementById("album-cover");window.onload=()=>player.load(),(playlistOpen||playlistUp)&&(track=document.querySelectorAll(".track")),player.addEventListener("loadeddata",()=>{player.readyState>=2&&(document.getElementById("track-times").style.opacity=1,PlayerClass.displayTrackTime())}),random.addEventListener("click",PlayerClass.random),backward.addEventListener("click",PlayerClass.backward),play.addEventListener("click",PlayerClass.play),forward.addEventListener("click",PlayerClass.forward),repeat.addEventListener("click",PlayerClass.repeat);