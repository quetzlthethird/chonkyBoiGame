const game = new Game();
const keys = {
    arrowLeftP1 : 65, //asd
    arrowRightP1 : 68,
    arrowJumpP1 : 87,
    arrowDownP1 : 83,

    arrowLeftP2 :37, //arrows
    arrowRightP2: 39,
    arrowJumpP2 : 38,
    arrowDownP2 : 40,

    arrowAttackerP1 : 69, //e
    arrowAttackerP2 : 191, // / key

    restart: 32 //space
}

function preload() {
  game.preloadGame();
}

function setup() {
  const canvas = createCanvas(1000, 700);
//   canvas.style ('display','block');
  canvas.parent('canvas');
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

    if (keyIsDown(keys.arrowDownP1)) {
        game.player.fastDown();
    }
    if (keyIsDown(keys.arrowDownP2)) {
        game.player2.fastDown();
    }
}

  
function keyPressed()    {
    if (gameState === 1) {
        if (keyCode === keys.arrowRightP1) {
                clear();
                game.player.moveRight();
        }  
        if (keyCode === keys.arrowLeftP1 ) {
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

        if (keyCode === keys.arrowDownP1) {
            clear();
            game.player.fastDown();
        }
        if (keyCode === keys.arrowDownP2) {
            clear();
            game.player2.fastDown();
        }
        
        if (keyCode === keys.arrowAttackerP1) {
            clear();
            game.player.attack();
        }
        if (keyCode === keys.arrowAttackerP2) {
            clear();
            game.player2.attack();
        }

    } else {
        if (keyCode === keys.restart) {
                game.setupGame();
                game.drawGame();
                gameState = 1;
                console.log( `space changed ${gameState} (Should be now 1)`)
        }  
    }
}