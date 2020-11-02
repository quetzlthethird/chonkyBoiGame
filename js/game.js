class Game {
    constructor() {
        this.foods = [];
    }
    
    preloadGame() {
        console.log("this is the game preload");
        this.playerImage = loadImage("../assets/ginger.png");
        this.burgerImage = loadImage("../assets/cheeseburger.png")
        // this.player2Image = loadImage("assets/pepper.png");
        // this.backgroundImages = [
        //     { src: loadImage("../assets/pixelBackground/Background/Purple.png"), x: 0, y:0, speed: 0 },
        //     { src: loadImage("../assets/pixelBackground/Background/Green.png"), x: 0, y:0, speed: 0.5 },
        // ];
    }

    setupGame() {
        console.log("this is the game setup");
        this.player = new Player(this.playerImage);
        // background = white;
        // this.player = new Player2(this.player2Image);
        // this.background = new Background(this.backgroundImages);
    }
  
    
    drawGame() {
        // this.background.drawBackground();
        this.player.drawPlayer();
        if (frameCount % 180=== 0 ) {
            console.log('burgertime')
            this.foods.push(new Food(this.burgerImage));
        }

        this.foods.forEach(function(food){
            food.drawFood();
        });

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
    }    
    
} //end class
  
  