class Player {
    constructor(playerImage,playerImageJump){
        this.image = playerImage;
        this.imageJump = playerImageJump;
        this.height = 0;
        this.width = 0;
        this.x = 100;
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
            this.image = game.playerImage
        }
        // if (this.y = 600)
        image(this.image, this.x, this.y-120, 61, 80);
    }
    moveLeft() {
        if (this.x >0){
        this.x -= 100
        }
        // this.image = loadImage('assets/character-left.png');
    }
    moveRight() {
        if (this.x < 950-this.width){
        this.x += 100
        }
        // this.image = loadImage('assets/character-right.png');
    }

    // addPoint() {
    //     let playerScoreCard = document.getElementById('player1')
    //     // console.log(playerScoreCard);
    //     playerScoreCard.innerText = this.score;
    //     // console.log(playerScore);
    // }

    jump() {
        if (this.y === height - this.height) {
            this.image = game.playerImageJump;
        //    image("./assets/gingerJump.png", this.x, this.y);
            // this.image = this.imageJump;
            this.velocity = -17;  //17
        //   console.log("this will be the jump");
        }
      }

    fastDown() {
            this.velocity += 10 ;  //17
    } 
} //ends class