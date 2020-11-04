let gameScore1 = 0;
let gameScore2 = 0;
let zeroPoints = 0;
let fontGameStyle
let winScore = 1;
let gameState = 0;
// 0 = start menu
// 1 = game running
// 2 = win menu


class Game {
    constructor() {
        this.foods = [];
        this.daggers = [];
        this.cleavers = [];

    }
    
    preloadGame() {
        fontGameStyle = loadFont("../font/TurretRoad-ExtraBold.ttf");
        this.playerImage = loadImage("../assets/ginger.png");
        this.player2Image = loadImage("../assets/pepper.png");
        this.burgerImage = loadImage("../assets/burger2.png");
        this.daggerImage = loadImage("../assets/PixelArt.png");
        this.cleaverImage = loadImage("../assets/PikPng.com_cleaver-png_5503819.png"); // , speed: 1 
        this.backgroundImage = loadImage("../assets/cyberpunkbackground.png");
    }

    setupGame() {
        clear();
        gameScore1 = zeroPoints;
        gameScore2 = zeroPoints;
        textFont(fontGameStyle)
        console.log("this is the game setup");

        this.player = new Player(this.playerImage);
        this.player2 = new Player2(this.player2Image);
        this.background = new Background(this.backgroundImage)
        
        // stroke('#222222');
        // strokeWeight(50);
        // rect(-50, 0, 1200, 800, 20, 20, 20 ,20);
        // background = white;
        // this.player = new Player2(this.player2Image);
        // this.background = new Background(this.backgroundImages);
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
            // fill(243,106,39);
            // // strokeWeight(1);
            textAlign (CENTER,CENTER);
            text(`Time to start meow`, width/2, height/2.2)
            text(`Press space!`, width/2, height/1.85 )
            this.player.drawPlayer();
            this.player2.drawPlayer();
            // press space!`, width/2, height/2);

        } else {
            frameRate(60);
            this.background.drawBackground();
    // ===========================================================================        
            fill (255,255,255,50); // dim the backgroun
            strokeWeight(50);
            rect(-50, 0, 1200, 800, 20, 20, 20 ,20);

            stroke(60,31,62); // light dark purple under layer
            // strokeWeight(5); 
            strokeWeight(50);
            fill (0,0,0,0);
            rect(-50, 5, 1200, 800, 20, 20, 20 ,20);
            
            stroke(60,31,62); // light dark purple under p1 layer
            strokeWeight(5); 
            fill(19,17,28); 
            rect(30, 20, 200, 50, 10, 10, 20 ,20); 
            strokeWeight(0); // removes the stroke from the text

            stroke(60,31,62); // light dark purple under layer
            strokeWeight(5); 
            strokeWeight(50);
            fill (0,0,0,0);
            rect(-50, 0, 1200, 800, 20, 20, 20 ,20);
            // fill(19,17,28); 
            // rect(30, 20, 200, 50, 10, 10, 20 ,20); 
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
                        // clear();
                        gameState = 2;
                        console.log( `^win changed gameState to ${gameState} (Should be 2)`)
                        game.winPlayer1();
                    }  
                    return true;
                } else {
                    gameScore1++;
                    // this.player.score += 1;
                    // console.log(this.player.score);
                    // let playerScoreCard = document.getElementById('player1').innerText = this.player.score;
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
                    // this.player2.score += 1;
                    // console.log(this.player2.score);
                    // let playerScoreCard2 = document.getElementById('player2').innerText = this.player2.score;
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
        // for (let food in this.foods) {
        //     this.foods.splice(food,1);
        // }
        // for (let food in this.foods) delete this.foods[food];

        // for (var i = this.foods.length - 1; i >= 0; i--) {
        //     // if (this.foods[i] === number) {
        //         this.foods.splice(i, 1);
        //     // }
        //    }
        //this removes some, but not all

        frameRate(0);
        console.log( `^win menu gameState: ${gameState} (Should be 2)`) 
        // console.log(typeof this.foods)

        this.winRectangle();
        textAlign(CENTER,CENTER);
        text(`Gingercat wins! 
        Press any key to replay the game`, width/2, height/2);
    }

    winPlayer2() {
        // gameState = 1;
        frameRate(0);   
        console.log( `^win menu gameState: ${gameState} (Should be 2)`)     
        this.winRectangle();
        textAlign(CENTER,CENTER);
        text(`Void cat wins! 
        Press any key to replay the game`, width/2, height/2);
    }

    winRectangle (){
        fill(60,31,62);
        rect(width/3, height/3, 333, 267, 20, 20, 20, 20);
        fill(255, 255, 255, 100);
        textSize(48);
        textAlign(CENTER,CENTER)
    }
    
} //end class
  
  