const SONGS = [
  {
    title: "Never Stop Learning",
    artist: "Rodrigo Goitia",
    album: "Inspiration by Platzi"
  },
  {
    title: "Don't be afraid to create",
    artist: "Rodrigo Goitia",
    album: "Impro for life"
  },
  {
    title: "Images from Content Reel",
    artist: "Images by Tung Hoang",
    album: "By Microsoft and Eugene Gavriloff"
  }
]

const likeButton = document.getElementById("like");
const likeLogo = document.getElementById("like-logo");
const pausePlayButton = document.getElementById("play-pause");
const progressBar = document.getElementById("progress-bar");
const backwardButton = document.getElementById("backward");
const forwardButton = document.getElementById("forward");
const songInfo = document.getElementById("song-info")


const togleLikeSong = () => {
  if(!likeLogo.classList.contains("button__logo--liked")) {
    likeLogo.classList.add("button__logo--liked")
    likeLogo.src = "assets/icons/heart-fill.svg"
  } else {
    likeLogo.classList.remove("button__logo--liked")
    likeLogo.src = "assets/icons/heart-outline.svg"
  }
}

const pausePlaySong = () => {
  progressBar.classList.toggle("player__progress-bar--pause")
  pausePlayButton.getElementsByTagName('img')[0].classList.toggle("button__logo--play")
  if(!progressBar.classList.contains("player__progress-bar--pause")){
    pausePlayButton.getElementsByTagName('img')[0]
    .setAttribute("src", "./assets/icons/pause-line.svg");
  } else {
    pausePlayButton.getElementsByTagName('img')[0]
    .setAttribute("src", "./assets/icons/play.svg");
  }
}

const beginNewSong = () => {
  progressBar.classList.add("new-song");
  setTimeout(() => {
    progressBar.classList.remove("new-song")
  }, 200);
}

const beginPlayer = () => {
  let index = 0;
  function newSong(direction){
    index += direction;
    index = index > 2 ? 0 : index
    index = index < 0 ? 2 : index
    const newSong = SONGS[index];
    const oldInfo = songInfo.childNodes;
    const titleP = document.createElement("p");
    titleP.classList.add("song-info__title")
    titleP.appendChild(document.createTextNode(newSong.title))
    songInfo.replaceChild(titleP, oldInfo[1])
    const artistP = document.createElement("p");
    artistP.classList.add("song-info__artist")
    artistP.appendChild(document.createTextNode(newSong.artist))
    songInfo.replaceChild(artistP, oldInfo[3])
    const albumP = document.createElement("p");
    albumP.classList.add("song-info__playlist")
    albumP.appendChild(document.createTextNode(newSong.album))
    songInfo.replaceChild(albumP, oldInfo[5])
  }
  return newSong;
}

const changeSong = beginPlayer();

const backwardSong = () => {
  const leftSong = document.getElementsByClassName("artworks__image-container--left")[0];
  leftSong.classList.remove("artworks__image-container--left");
  const rightSong = document.getElementsByClassName("artworks__image-container--right")[0];
  rightSong.classList.remove("artworks__image-container--right");
  const centerSong = document.getElementsByClassName("artworks__image-container--big")[0];
  centerSong.classList.remove("artworks__image-container--big");
  if(leftSong.classList.contains("forward")){
    leftSong.classList.remove("forward");
    rightSong.classList.remove("forward");
    centerSong.classList.remove("forward");
  }
  leftSong.classList.add("artworks__image-container--right");
  rightSong.classList.add("artworks__image-container--big");
  centerSong.classList.add("artworks__image-container--left");
  leftSong.classList.add("backward");
  rightSong.classList.add("backward");
  centerSong.classList.add("backward");

  beginNewSong();
  changeSong(-1)
}



const forwardSong = () => {
  const leftSong = document.getElementsByClassName("artworks__image-container--left")[0];
  leftSong.classList.remove("artworks__image-container--left");
  const rightSong = document.getElementsByClassName("artworks__image-container--right")[0];
  rightSong.classList.remove("artworks__image-container--right");
  const centerSong = document.getElementsByClassName("artworks__image-container--big")[0];
  centerSong.classList.remove("artworks__image-container--big");
  if(leftSong.classList.contains("backward")){
    leftSong.classList.remove("backward");
    rightSong.classList.remove("backward");
    centerSong.classList.remove("backward");
  }
  leftSong.classList.add("artworks__image-container--big");
  rightSong.classList.add("artworks__image-container--left");
  centerSong.classList.add("artworks__image-container--right");
  leftSong.classList.add("forward");
  rightSong.classList.add("forward");
  centerSong.classList.add("forward");

  beginNewSong();
  changeSong(1)
}


likeButton.addEventListener('click', togleLikeSong);
pausePlayButton.addEventListener('click', pausePlaySong);
backwardButton.addEventListener('click', backwardSong);
forwardButton.addEventListener('click', forwardSong);