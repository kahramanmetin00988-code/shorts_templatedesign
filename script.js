let video = document.getElementById("video-box");
let pauseContainer = document.querySelector(".pause");

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    setTimeout(() => {
      pauseContainer.classList.remove("pause-btn");
    }, 300);
  } else {
    video.pause();

    pauseContainer.classList.add("pause-btn");
  }
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter") {
    video.click();
  }
});
