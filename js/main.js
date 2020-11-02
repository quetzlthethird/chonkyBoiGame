const game = new Game();

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
    background(255,255,255);
    rectangle();
  
    // clear();
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

function rectangle() {
    stroke(255);
    fill(255,255,255,100);
    rect(70,70,60,60,10);
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
    if (keyCode === 32) {
        game.player.jump();
    }
    
}

function addPoint() {
    let playerScore = document.getElementById('player1').innerText = player.score;
}

