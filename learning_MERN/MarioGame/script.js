let mario = document.querySelector(".mario");
let obstacle = document.querySelector(".obstacle");
let gameOverBox = document.querySelector(".game-over");
let button = document.querySelector("button");
let scoreText = document.querySelector(".score");

let marioX = 50;
let marioY = 0;

let obstacleX = 800;

let isJumping = false;
let gameRunning = true;

let score = 0;


// MARIO MOVEMENT
document.addEventListener("keydown", function (e) {

    if (gameRunning === false) {
        return;
    }

    // MOVE RIGHT
    if (e.key === "d" || e.key === "ArrowRight") {

        marioX = marioX + 10;

        if (marioX > 750) {
            marioX = 750;
        }

        mario.style.left = marioX + "px";
    }


    // MOVE LEFT
    if (e.key === "a" || e.key === "ArrowLeft") {

        marioX = marioX - 10;

        if (marioX < 0) {
            marioX = 0;
        }

        mario.style.left = marioX + "px";
    }


    // JUMP
    if (
        e.key === " " ||
        e.key === "w" ||
        e.key === "ArrowUp"
    ) {
        jump();
    }

});


// JUMP FUNCTION
function jump() {

    if (isJumping === true) {
        return;
    }

    isJumping = true;

    let jumpUp = setInterval(function () {

        marioY = marioY + 10;

        mario.style.bottom = marioY + "px";


        if (marioY >= 130) {

            clearInterval(jumpUp);

            let jumpDown = setInterval(function () {

                marioY = marioY - 10;

                mario.style.bottom = marioY + "px";


                if (marioY <= 0) {

                    marioY = 0;

                    mario.style.bottom = "0px";

                    clearInterval(jumpDown);

                    isJumping = false;
                }

            }, 20);
        }

    }, 20);
}


// GAME LOOP
let gameLoop = setInterval(function () {

    if (gameRunning === false) {
        return;
    }

    // Move obstacle
    obstacleX = obstacleX - 5;

    obstacle.style.left = obstacleX + "px";


    // Reset obstacle and increase score
    if (obstacleX < -40) {

        obstacleX = 800;

        score++;
    }


    // Update score
    scoreText.innerHTML = "Score: " + score;


    // Collision detection
    let marioBox = mario.getBoundingClientRect();
    let obstacleBox = obstacle.getBoundingClientRect();

    if (
        marioBox.right > obstacleBox.left &&
        marioBox.left < obstacleBox.right &&
        marioBox.bottom > obstacleBox.top &&
        marioBox.top < obstacleBox.bottom
    ) {

        gameOver();
    }

}, 10);


// GAME OVER
function gameOver() {

    gameRunning = false;

    gameOverBox.style.display = "flex";
}


button.addEventListener("click", function () {
    gameRunning = true;
    score = 0;
    scoreText.innerHTML = "Score: 0";

    marioX = 50;
    marioY = 0;

    mario.style.left = "50px";
    mario.style.bottom = "0px";

    obstacleX = 800;
    obstacle.style.left = "800px";
    isJumping = false;
    gameOverBox.style.display = "none";
});