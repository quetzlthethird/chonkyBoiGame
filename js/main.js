const game = new Game();

function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(1000, 800);
  game.setupGame();
}

function draw() {
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


function keyPressed(){ 
    // if (keyCode === 40) { //down a row
    //     clear();
    //     game.player.moveDown();
    //     // win();
    //   // storeItem('playerPosition', player.row);
    // } 
    // if (keyCode === 38) {
    //     game.player.moveUp();
    //     // win();
    // }
    if (keyCode === 39) {
        clear();
        game.player.moveRight();
        // win();
    }
    if (keyCode === 37) {
        clear();
        game.player.moveLeft();
        // win();
    }
}

// function addPoint() {
//     let playerScore = document.getElementById('player1').innerText = player.score;
// }

