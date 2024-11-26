// Select the audio element
const backgroundMusic = document.getElementById("background-music");
const playMusicButton = document.getElementById("play-music-btn");

playMusicButton.addEventListener("click", () => {
  backgroundMusic.play();
  playMusicButton.style.display = "none"; // Hide the button after playing
});

function createBlossoms() {
  const numBlossoms = 50; // Number of cherry blossoms
  const body = document.body;

  for (let i = 0; i < numBlossoms; i++) {
    const blossom = document.createElement("div");
    blossom.classList.add("blossom");

    // Randomize start position
    blossom.style.left = Math.random() * 100 + "vw"; // Anywhere across the viewport
    blossom.style.top = Math.random() * -50 + "vh"; // Start above the viewport

    // Randomize size and animation duration
    const size = Math.random() * 10 + 20 + "px"; // Random size between 20px and 30px
    const duration = Math.random() * 5 + 10 + "s"; // Random duration between 10s and 15s

    blossom.style.width = size;
    blossom.style.height = size;
    blossom.style.animationDuration = duration;

    body.appendChild(blossom);
  }
}

// Initialize Blossoms on Page Load
window.onload = createBlossoms;

//Transistion to Game screen
const startGameBtn = document.getElementById("start-game-btn");

startGameBtn.addEventListener("click", () => {
  window.location.href = "./game.html"; // Navigate to game screen
});

// Navigate to the instructions screen
const instructionsBtn = document.getElementById("instructions-btn");

instructionsBtn.addEventListener("click", () => {
  window.location.href = "./instructions.html"; // Navigate to the instructions screen
});
