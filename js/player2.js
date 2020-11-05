class Player2 {
    constructor(player2Image){
        this.image = player2Image;
        this.height = 0;
        this.width = 0;
        this.x = 850;
        this.y = height - this.height;
        this.gravity = 0.2;
        this.velocity = 0;
        // this.score = 0;
    }

    drawPlayer(){
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y >= height - this.height) {
            this.y = height - this.height;
            this.image = game.player2Image
        } 
        image(this.image, this.x, this.y-120, 61 ,80 );
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
            this.image = game.player2ImageJump;
            this.velocity = -15;  //17
        }
      }

    fastDown() {
        this.velocity += 10 ;  //17
    } 

    onFire() {
        if (this.y === height - this.height) {
            this.image = game.p2OnFire;
            this.velocity = -15;  //17
        }
    }

    attack (){
        console.log(this.x);
        if (dist(this.x,this.y, game.player2.x, game.player2.y)<100 && gameScore1 > 0) {
            gameScore2++;
            gameScore1--;
            game.player.onFire();
        }//if ennds
    }
    
      
} //ends class