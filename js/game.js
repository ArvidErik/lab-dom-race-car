class Game {
    constructor(){
        this.startScreen = document.querySelector("#game-intro")
        this.gameScreen = document.querySelector("#game-screen")
        this.gameEndScreen = document.querySelector("#game-end")
        this.player = new Player (
            this.gameScreen, 200, 500, 100, 150, "./images/car.png"
        )
        this.width = "500px";
        this.height = "600px";
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    };

    start(){
        this.gameScreen.style.width = this.width;
        this.gameScreen.style.height = this.height;

        //Hide the starter screen
        this.startScreen.style.display = "none";

        //display the gamescreen
        this.gameScreen.style.display = "block";

        this.gameLoop();
    };

    gameLoop(){
        // console.log("game loop started");
        
        if (this.gameIsOver) {
            return
        };

        this.update();

        window.requestAnimationFrame(()=>{
            this.gameLoop()
        });
    };

    update(){
        this.player.move();
    };
};

console.log("Game is working!");