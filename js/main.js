const game = new Game();
let running = true;
const keys = {
    arrowLeftP1 : 65,
    arrowRightP1 : 68,
    arrowJumpP1 : 87,

    arrowLeftP2 :37,
    arrowRightP2: 39,
    arrowJumpP2 : 38,
    restart: 32
}

function preload() {
  game.preloadGame();
}

function setup() {
  const canvas = createCanvas(1000, 800);
  canvas.style ('display','block');
  game.setupGame();
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

function draw() {
    // background(178, 214, 187);
    // rectangle();
  
    clear();
    game.drawGame();
    // if (keyIsDown(39)) {
    //     game.player.moveRight();
    //     // win();
    // }
    // if (keyIsDown(37)) {
    //     game.player.moveLeft();
    //     // win();
    // }
}

// function rectangle() {
//     stroke(255);
//     // fill(255,255,255,100);
//     // rect(70,70,60,60,10);
//   }
  
function keyPressed()    {  
    // if (gameIsRunning) {
    if (keyCode === keys.arrowRightP1) {
            clear();
            game.player.moveRight();
    }  
    if (keyCode === keys.arrowLeftP1) {
            clear();
            game.player.moveLeft();
    }  
    if (keyCode === keys.arrowJumpP1) {
            clear();
            game.player.jump();
    }  
    if (keyCode === keys.arrowRightP2) {
            clear();
            game.player2.moveRight();
    }  
    if (keyCode === keys.arrowLeftP2) {
            clear();
            game.player2.moveLeft();
    }  
    if (keyCode === keys.arrowJumpP2) {
        clear();
        game.player2.jump();
    }
    if (keyCode === keys.restart && gameScore1 === winScore || gameScore2 === winScore ) {
            // clear();
            game.setupGame();
            game.drawGame()
    }  
}

// } else if (keyCode === keys.restart) {
//     clear();
//     game.setupGame();
//     // game.drawGame();
// }

// function gameIsRunning(){ return gameScore < winScore && gameScore2 < winScore;}
