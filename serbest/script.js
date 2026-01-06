const video = document.getElementById("video-box");
const mainkalp = document.querySelector(".fa-heart");

function likeClick() {
  mainkalp.classList.remove("fa-regular");
  mainkalp.classList.add("fa-solid");
  mainkalp.style.color = "#e40048ff";
}

video.ondblclick = (o) => {
  let kalp = document.createElement("i");
  kalp.classList.add("fa-solid", "fa-heart", "fa-bounce");
  kalp.style.position = "absolute";
  kalp.style.color = "#e40048ff";
  kalp.style.fontSize = "2.6rem";
  kalp.style.left = o.clientX + "px";
  kalp.style.top = o.clientY + "px";
  kalp.style.zIndex = "100";
  kalp.style.pointerEvents = "none";
  document.body.appendChild(kalp);

  likeClick();

  setTimeout(function () {
    kalp.remove();
  }, 500);
};

mainkalp.onclick = () => {
  if (mainkalp.classList.contains("fa-regular")) {
    likeClick();
  } else {
    mainkalp.classList.add("fa-regular");
    mainkalp.classList.remove("fa-solid");
    mainkalp.style.color = "#fff";
  }
};

video.onclick = function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

window.onkeydown = (e) => {
  if (e.code === "Space" || e.code === "Enter") {
    video.click();
  }
};

const commentMenu = document.querySelector(".comments");
const commentBtn = document.querySelector("#comment-btn");

commentBtn.onclick = () => {
  if (
    commentMenu.style.display === "none" ||
    commentMenu.style.display === ""
  ) {
    commentMenu.style.display = "flex";
  } else {
    commentMenu.style.display = "none";
  }
};
