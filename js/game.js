let gameScore1 = 0;
let gameScore2 = 0;

class Game {
    constructor() {
        this.foods = [];
        this.daggers = [];
        this.cleavers = [];
    }
    
    preloadGame() {
        console.log("this is the game preload");
        this.playerImage = loadImage("../assets/ginger.png");
        this.player2Image = loadImage("../assets/pepper.png");
        this.burgerImage = loadImage("../assets/burger2.png");
        this.daggerImage = loadImage("../assets/PixelArt.png");
        this.cleaverImage = loadImage("../assets/PikPng.com_cleaver-png_5503819.png"); // , speed: 1 
        this.backgroundImage = loadImage("../assets/cyberpunkbackground.png");
        // this.backgroundImages = [
        //     { src: loadImage("../assets/pixelBackground/Background/Purple.png"), x: 0, y:0, speed: 0 },
        //     { src: loadImage("../assets/pixelBackground/Background/Green.png"), x: 0, y:0, speed: 0.5 },
        // ];
    }

    setupGame() {
        // console.log("this is the game setup");
        this.player = new Player(this.playerImage);
        this.player2 = new Player2(this.player2Image);
        this.background = new Background(this.backgroundImage)
        
        // stroke('#222222');
        // strokeWeight(50);
        // rect(-50, 0, 1200, 800, 20, 20, 20 ,20);
        // background = white;
        // this.player = new Player2(this.player2Image);
        // this.background = new Background(this.backgroundImages);
    }
  
    
    drawGame() {
        this.background.drawBackground();
        this.player.drawPlayer();
        this.player2.drawPlayer();
        // this.BackgroundBorder.drawBorder();

        stroke('#13111c');
        fill (0,0,0,0);
        strokeWeight(50);
        rect(-50, 0, 1200, 800, 20, 20, 20 ,20);

        strokeWeight(0);
        fill(19,17,28);
        rect(30, 20, 175, 50, 10, 10, 20 ,20);
        fill(255, 255, 255);
        textSize(25);
        text(`Gingercat: ${gameScore1}`, 50, 50);

        //player 2 score
        fill(19,17,28);
        rect(800, 20, 175, 50, 10, 10, 20 ,20);
        fill(255, 255, 255);
        textSize(25);
        text(`Blackcat: ${gameScore2}`, 825, 50);

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
                if (gameScore1 === 2) {
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
                if (gameScore2 === 2) {
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
        

        //daggers from right side
        if (frameCount % 180 === 0 ) {
            console.log('DAGGERTIME')
            this.daggers.push(new Dagger(this.daggerImage));
        }
        this.daggers.forEach(function(dagger){
            dagger.drawFood();
        });
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

        //cleavers from left side
        if (frameCount % 180 === 0 ) {
            console.log('CLEAAAAAVEEEERRRR')
            this.cleavers.push(new Cleaver(this.cleaverImage));
        }
        this.cleavers.forEach(function(cleaver){
            cleaver.drawFood();
        });

        //player1collision
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

    }  //end draw  


    winPlayer1() {
        frameRate(0);       
        this.winRectangle();
        text(`Gingercat wins! 
        Press any key to replay the game`, width/2, height/2);
        
        // game.setupGame();
    }

    winPlayer2() {
        frameRate(0);       
        this.winRectangle();
        text(`Blackcat wins! 
        Press any key to replay the game`, width/2, height/2);
        
        // game.setupGame();
    }

    winRectangle (){
        fill(0,0,0);
        rect(width/3, height/3, 333, 267, 20, 20, 20, 20);
        fill(255, 255, 255, 100);
        textSize(48);
        textAlign(CENTER,CENTER)
    }
    
} //end class
  
  