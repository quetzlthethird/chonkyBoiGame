let gameScore1 = 0;
let gameScore2 = 0;
let zeroPoints = 0;
let fontGameStyle
let winScore = 10;
let gameState = 0;
// 0 = start menu
// 1 = game running
// 2 = win menu
// let peachesGif


class Game {
    constructor() {
        this.foods = [];
        this.daggers = [];
        this.cleavers = [];
        // this.peaches 
        // explode_sprite_sheet = loadSpriteSheet('./assets/characters/pipo-nekonin002.png',171,158,11 )

    }
    
    preloadGame() {
        fontGameStyle = loadFont("./font/TurretRoad-ExtraBold.ttf");
        this.playerImage = loadImage("./assets/gingerSit.png");
        this.player2Image = loadImage("./assets/pepperSit.png");
        this.burgerImage = loadImage("./assets/burgerresize.png");
        this.daggerImage = loadImage("./assets/PixelArt.png");
        this.cleaverImage = loadImage("./assets/PikPng.com_cleaver-png_5503819.png"); // , speed: 1 
        this.backgroundImage = loadImage("./assets/cyberpunkbackground.png");
        
        this.playerImageJump = loadImage("./assets/gingerJump.png");
        this.player2ImageJump = loadImage("./assets/pepperJump.png");
        // peachesGif = loadImage("./assets/peaches.gif");
    }

    setupGame() {
        clear();
        gameScore1 = zeroPoints;
        gameScore2 = zeroPoints;
        textFont(fontGameStyle)
        console.log("this is the game setup");
        // loadImage("./assets/peaches.gif"), peachesGif => 
        //     image(peachesGif, height/3, width/1.75);


        this.player = new Player(this.playerImage);
        this.player2 = new Player2(this.player2Image);
        this.background = new Background(this.backgroundImage)
        
        for (var i = this.foods.length - 1; i >= 0; i--) {
                this.foods.splice(i, 1);
        }
        for (var i = this.daggers.length - 1; i >= 0; i--) {
            this.daggers.splice(i, 1);
        }
        for (var i = this.cleavers.length - 1; i >= 0; i--) {
            this.cleavers.splice(i, 1);
        }
    }
  
    
    drawGame() {
        if (gameState === 0) {
            this.winRectangle();
            fill(255, 255, 255);
            textSize(25);

            textSize (50)
            textAlign (CENTER,CENTER);
            text(`Time to start meow`, width/2, height/2.2)
            text(`Press space!`, width/2, height/1.85 )
            this.player.drawPlayer();
            this.player2.drawPlayer();

        } else {
            frameRate(60);
            this.background.drawBackground();
    // ===========================================================================        
            fill (255,255,255,50); // dim the background
            strokeWeight(50);
            rect(-50, 0, 1200, 800, 20, 20, 20 ,20);

            stroke(60,31,62); // border - light dark purple
            strokeWeight(50);
            fill (0,0,0,0);
            rect(-50, 5, 1200, 800, 20, 20, 20 ,20);
            
            stroke(60,31,62); // light dark purple under p1 layer
            strokeWeight(5); 
            fill(19,17,28); 
            rect(30, 20, 200, 50, 10, 10, 20 ,20); 
            strokeWeight(0); // removes the stroke from the text

            stroke(60,31,62); // light dark purple under p2 layer
            strokeWeight(5); 
            strokeWeight(50);
            fill (0,0,0,0);
            rect(-50, 0, 1200, 800, 20, 20, 20 ,20);
            // strokeWeight(0); // removes the stroke from the text
        
            stroke(60,31,62); // add a stroke around rect with color white
            strokeWeight(5); // thickness 
            fill(19,17,28);
            rect(775, 20, 200, 50, 10, 10, 20 ,20);
            strokeWeight(0); 

            fill(255, 255, 255);
            textSize(25);
            text(`Gingerboy: ${gameScore1}`, 127, 40); 
            text(`Void boy: ${gameScore2} `, 880 , 40);

// ===========================================================================
            this.player.drawPlayer();
            this.player2.drawPlayer();

// ===========================================================================
            //burgers from sky
            if (frameCount % 100 === 0 ) {
                // console.log('burgertime')
                this.foods.push(new Food(this.burgerImage));
            }
            this.foods.forEach(function(food){
                food.drawFood();
            });

            //player1collision
            this.foods = this.foods.filter((food) => {
                if (!food.collision(this.player)) {
                    if (gameScore1 >= winScore) {
                        // gameScore1++;
                        gameState = 2;
                        // console.log( `^win changed gameState to ${gameState} (Should be 2)`)
                        game.winPlayer1();
                    }  
                    return true;
                } else {
                    gameScore1++;
                    return false;
            }
            });  

            //player2collision
            this.foods = this.foods.filter((food) => {
                if (!food.collision(this.player2)) {
                    if (gameScore2 >= winScore) {
                        gameState = 2;
                        game.winPlayer2();
                    }
                return true;
                } else {
                    gameScore2++;
                    return false;
            }
            });  

    // ===========================================================================
        //obstacles draw
            if (frameCount % 2000 === 0 ) {
                // console.log('DAGGERTIME')
                this.daggers.push(new Dagger(this.daggerImage));
            }
            this.daggers.forEach(function(dagger){
                dagger.drawFood();
            });
            
            if (frameCount % 2000 === 0 ) {
                // console.log('CLEAAAAAVEEEERRRR')
                this.cleavers.push(new Cleaver(this.cleaverImage));
            }
            this.cleavers.forEach(function(cleaver){
                cleaver.drawFood();
            });

        //collisions
            //player1collision
            this.daggers = this.daggers.filter((dagger) => {
                if (!dagger.collision(this.player)) {
                return true;
                } else {
                    gameScore1--;
                    // this.player.score -= 1;
                    // let playerScoreCard = document.getElementById('player1').innerText = this.player.score;
                    return false;
            }
            });
            this.cleavers = this.cleavers.filter((cleaver) => {
                if (!cleaver.collision(this.player)) {
                return true;
                } else {
                    gameScore1--;
                    // this.player.score -= 1;
                    // let playerScoreCard = document.getElementById('player1').innerText = this.player.score;
                    return false;
            }
            });    

            //player2collision
            this.daggers = this.daggers.filter((dagger) => {
                if (!dagger.collision(this.player2)) {
                return true;
                } else {
                    gameScore2--;
                    // this.player2.score -= 1;
                    // let playerScoreCard2 = document.getElementById('player2').innerText = this.player2.score;
                    return false;
            }
            }); 
            this.cleavers = this.cleavers.filter((cleaver) => {
                if (!cleaver.collision(this.player2)) {
                return true;
                } else {
                    gameScore2--;
                    // this.player2.score -= 1;
                    // let playerScoreCard2 = document.getElementById('player2').innerText = this.player2.score;
                    return false;
            }
            });  
    }

// ===========================================================================
        //top border
        stroke('#13111c');
        fill (0,0,0,0);
        strokeWeight(50);
        rect(-50, 0, 1200, 800, 20, 20, 20 ,20);
        strokeWeight(0); 
    
    }  //end draw  
// ===========================================================================

    winPlayer1() {
        frameRate(0);
        // console.log( `^win menu gameState: ${gameState} (Should be 2)`) 

        this.winRectangle();        
        textAlign(CENTER,CENTER);
        // stroke(255,255,255);
        // strokeWeight(1)
        textSize(66)
        text(`Gingercat wins!`, width/2, height/2.15)
        textSize(38);
        text(`To replay, press the spacebar`,width/2, height/1.75)
        // to replay the game,
        // press the spacebar `,width/2, height/2);
    }

    winPlayer2() {
        frameRate(0);   
        console.log( `^win menu gameState: ${gameState} (Should be 2)`)     
        this.winRectangle();
        textSize(66)
        text(`Void boy wins!`, width/2, height/2.15)
        // strokeWeight(0)
        textSize(38);
        text(`To replay, press the spacebar`,width/2, height/1.75)
    }

    winRectangle (){
        // fill(0,0,0,10 );
        // rect(0,0,1200,800);

        stroke(243,106,39);
        strokeWeight(5);
        fill(60,31,62);
        rect(215, height/3, width/1.75, 267, 20, 20, 20, 20);
        strokeWeight(0);

        fill(60,31,62);
        circle(height/3, width/1.75, 215);
        // loadImage("./assets/peaches.gif"), peachesGif => 
        //     image(peachesGif, height/3, width/1.75);

        fill(255, 255, 255);
        textSize(48);
        textAlign(CENTER,CENTER)

    }
    
} //end class
  
  