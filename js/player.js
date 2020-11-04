class Player {
    constructor(playerImage){
        this.image = playerImage;
        this.height = 78;
        this.width = 80;
        this.x = 0;
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
        }
        image(this.image, this.x, this.y-25);
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
          this.velocity = -17;  //17
        //   console.log("this will be the jump");
        }
      }
} //ends class