window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  startButton.addEventListener("click", function () {
    startGame();
  });

  let game;

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  function handleKeyboardInput(key) {
    if (key === "ArrowUp") {
    game.player.directionY = -1;
    }
    else if (key === "ArrowDown") {
    game.player.directionY = 1;
    }
    else if (key === "ArrowLeft") {
    game.player.directionX = -1;
    }
    else if (key === "ArrowRight") {
    game.player.directionX = 1;
    }
  }

  window.addEventListener("keydown", (event)=>{
    console.log(event);
    handleKeyboardInput(event.key)

  });

};


console.log("script is working!");