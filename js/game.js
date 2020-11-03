let gameScore1 = 0;
let gameScore2 = 0;

class Game {
    constructor() {
        this.foods = [];
        this.daggers = [];
    }
    
    preloadGame() {
        console.log("this is the game preload");
        this.playerImage = loadImage("../assets/ginger.png");
        this.player2Image = loadImage("../assets/pepper.png");
        this.burgerImage = loadImage("../assets/burger2.png");
        this.daggerImages = [
            { src: loadImage("../assets/PixelArt.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/PikPng.com_cleaver-png_5503819.png"), x: 0, speed: 1 },
        ];
        // this.player2Image = loadImage("assets/pepper.png");
        // this.backgroundImages = [
        //     { src: loadImage("../assets/pixelBackground/Background/Purple.png"), x: 0, y:0, speed: 0 },
        //     { src: loadImage("../assets/pixelBackground/Background/Green.png"), x: 0, y:0, speed: 0.5 },
        // ];
    }

    setupGame() {
        // console.log("this is the game setup");
        this.player = new Player(this.playerImage);
        this.player2 = new Player2(this.player2Image);
        // background = white;
        // this.player = new Player2(this.player2Image);
        // this.background = new Background(this.backgroundImages);
    }
  
    
    drawGame() {
        // this.background.drawBackground();
        this.player.drawPlayer();
        this.player2.drawPlayer();

        //player 1 score
        fill(255, 255, 255, 100);
        textSize(24);
        text(`Gingercat: ${gameScore1}`, 50, 40);

        //player 2 score
        fill(255, 255, 255, 100);
        textSize(24);
        text(`Blackcat: ${gameScore2}`, 850, 40);

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
        

        //daggers from side
        if (frameCount % 180 === 0 ) {
            console.log('DAGGERTIME')
            this.daggers.push(new Dagger(this.daggerImages));
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
  
  