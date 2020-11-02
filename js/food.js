class Food {
    constructor (burgerImage) {
        this.image = burgerImage;
        this.x = (Math.random() * width);
        this.y = 0;
        this.width = 150;
        this.height = 78;
    }

    collision(playerInfo) {
        let foodX = this.x + this.width / 2 ;
        let foodY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        if (dist(foodX, foodY, playerX, playerY) > 50) {
            return false; 
          } else {
            return true;
      }
      
    }
    
    drawFood() {
        this.y++;
        image(this.image, this.x, this.y, this.width, this.height);
        this.collision(game.player);
    }


} //ends the class