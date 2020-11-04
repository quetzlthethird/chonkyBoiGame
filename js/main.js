const game = new Game();
let running = true;

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
  
function keyPressed(){ 
    
    // if running = !running
    
    //player1 = arrows
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
    if (keyCode === 38) {
        game.player.jump();
    }

    //player2 awd
    if (keyCode === 68) {
        clear();
        game.player2.moveRight();
        // win();
    }
    if (keyCode === 65) {
        clear();
        game.player2.moveLeft();
        // win();
    }
    if (keyCode === 87) {
        game.player2.jump();
    }
    
}
// function update(){
//     if (!running) return 
// }


