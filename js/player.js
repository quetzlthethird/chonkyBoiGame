class Player {
    constructor(playerImage,playerImageJump,gingerSitRight){
        this.image = playerImage;
        this.imageRight = gingerSitRight;
        this.imageJump = playerImageJump;
        
        this.height = 0;
        this.width = 0;
        this.x = 100;
        this.y = height - this.height;
        this.gravity = 0.2;
        this.velocity = 0;
    }
 
    drawPlayer(){
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y >= height - this.height) {
            this.y = height - this.height;
            this.image = game.gingerSitRight;
        }
        image(this.image, this.x, this.y-120, 61, 80);
    }
    moveLeft() {
        if (this.x >0){
        this.x -= 100
        }
    }
    moveRight() {
        if (this.x < 950-this.width){
        this.x += 100
        }
    }


    jump() {
        if (this.y === height - this.height) {
            this.image = game.playerImageJump;
            this.velocity = -15;  //17
        }
      }

    fastDown() {
            this.velocity += 10 ;  //17
    } 
} //ends class