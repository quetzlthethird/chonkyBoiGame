class Cleaver {
    constructor (cleaverImage){
    this.image = cleaverImage;
    this.x = 0;
    this.y = (Math.random() * width);
    this.width = 116;
    this.height = 92;
    }

    collision(playerInfo)  {
        let cleaverX = this.x + this.width / 2 ;
        let cleaverY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;

        if (dist(cleaverX, cleaverY, playerX, playerY) > 50) {
            return false; 
          } else {
            return true;
      }
      
    }
    
    drawFood() {
        this.x++;
        image(this.image, this.x, this.y-50, this.width, this.height);
        this.collision(game.player);
    }

}