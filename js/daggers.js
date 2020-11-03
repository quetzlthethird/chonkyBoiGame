class Dagger {
    constructor (daggerImage) {
        this.image = daggerImage;
        this.x = 1000
        this.y = (Math.random() * width);
        this.width = 235;
        this.height = 180;
    }

    collision(playerInfo)  {
        let daggerX = this.x + this.width / 2 ;
        let daggerY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;

        if (dist(daggerX, daggerY, playerX, playerY) > 50) {
            return false; 
          } else {
            return true;
      }
      
    }
    
    drawFood() {
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height);
        this.collision(game.player);
    }


} //ends the class