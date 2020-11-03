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
        this.daggerImage = loadImage("../assets/PixelArt.png")
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

        //burgers from sky
        if (frameCount % 180=== 0 ) {
            // console.log('burgertime')
            this.foods.push(new Food(this.burgerImage));
        }
        this.foods.forEach(function(food){
            food.drawFood();
        });
        //player1collision
        this.foods = this.foods.filter((food) => {
            if (!food.collision(this.player)) {
              return true;
            } else {
                this.player.score += 1;
                console.log(this.player.score);
                let playerScoreCard = document.getElementById('player1').innerText = this.player.score;
                return false;
          }
        });  
        //player2collision
        this.foods = this.foods.filter((food) => {
            if (!food.collision(this.player2)) {
              return true;
            } else {
                this.player2.score += 1;
                console.log(this.player2.score);
                let playerScoreCard2 = document.getElementById('player2').innerText = this.player2.score;
                return false;
          }
        });  
        
        //daggers from side
        if (frameCount % 100 === 0 ) {
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
                this.player.score -= 1;
                let playerScoreCard = document.getElementById('player1').innerText = this.player.score;
                return false;
          }
        });  
        //player2collision
        this.daggers = this.daggers.filter((dagger) => {
            if (!dagger.collision(this.player2)) {
              return true;
            } else {
                this.player2.score -= 1;
                let playerScoreCard2 = document.getElementById('player2').innerText = this.player2.score;
                return false;
          }
        });  

    }  //end draw  

    
} //end class
  
  