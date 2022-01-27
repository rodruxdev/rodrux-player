const likeButton = document.getElementById("like");
const likeLogo = document.getElementById("like-logo");

const likeSong = () => {
  if(likeLogo.className === "button__logo") {
    likeLogo.classList.remove("button__logo")
    likeLogo.classList.add("button__logo--liked")
    likeLogo.src = "assets/icons/heart-fill.svg"
  } else {
    likeLogo.classList.remove("button__logo--liked")
    likeLogo.classList.add("button__logo")
    likeLogo.src = "assets/icons/heart-outline.svg"

  }
}

likeButton.addEventListener('click', likeSong);