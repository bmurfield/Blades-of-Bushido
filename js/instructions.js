// instructions.js
document
  .getElementById("return-to-title-btn")
  .addEventListener("click", function () {
    window.location.href = "title.html"; // Navigate back to the title screen
  });

document
  .getElementById("start-game-btn")
  .addEventListener("click", function () {
    window.location.href = "game.html"; // Navigate back to the title screen
  });

const backgroundMusic = document.getElementById("background-music");
const playMusicButton = document.getElementById("play-music-btn");

playMusicButton.addEventListener("click", () => {
  backgroundMusic.play();
  playMusicButton.style.display = "none"; // Hide the button after playing
});
