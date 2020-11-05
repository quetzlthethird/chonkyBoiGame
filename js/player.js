class Player {
    constructor(playerImage,playerImageJump,gingerSitRight,p1OnFire){
        this.image = playerImage;
        // this.imageRight = gingerSitRight;
        // this.imageJump = playerImageJump;
        // this.imageOnFire = p1OnFire;

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
        if (this.y <= height - this.height) {
            this.image = game.playerImageJump;
            this.velocity = -15;  //17
        }
      }

    fastDown() {
            this.velocity += 10 ;  //17
    } 

    onFire() {
        if (this.y === height - this.height) {
            this.image = game.p1OnFire;
            this.velocity = -15;  //17
        }
    }

    attack (){
        if (dist(this.x, this.y, game.player2.x,game.player2.y) < 100 && gameScore2 > 0) {
            gameScore1++;
            gameScore2--;
            game.player2.onFire();
        }//if ennds

    }//attack ends

} //ends class