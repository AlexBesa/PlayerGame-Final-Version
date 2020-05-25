const gameContainer = document.querySelector("canvas");
const context = gameContainer.getContext("2d");
const scale = 20;
const rows = gameContainer.height / scale;
const columns = gameContainer.width / scale;

document.getElementById('playButton').addEventListener('click', () => {
  const game = new Game(gameContainer);
  game.startApp(); 
})

