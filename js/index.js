const likeButton = document.getElementById("like");
const likeLogo = document.getElementById("like-logo");
const pausePlayButton = document.getElementById("play-pause");
const progressBar = document.getElementById("progress-bar");

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
  if(!progressBar.classList.contains("player__progress-bar--pause")){
    pausePlayButton.getElementsByTagName('img')[0]
    .setAttribute("src", "./assets/icons/pause-line.svg");
  } else {
    pausePlayButton.getElementsByTagName('img')[0]
    .setAttribute("src", "./assets/icons/play.svg");
  }
}

likeButton.addEventListener('click', togleLikeSong);
pausePlayButton.addEventListener('click', pausePlaySong);
