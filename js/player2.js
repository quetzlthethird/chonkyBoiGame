class Player2 {
    constructor(player2Image){
        this.image = player2Image;
        this.height = 78;
        this.width = 83;
        this.x = 900;
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
    //     let playerScoreCard2 = document.getElementById('player2')
    //     // console.log(playerScoreCard);
    //     playerScoreCard2.innerText = this.score;
    //     // console.log(playerScore);
    // }

    jump() {
        if (this.y === height - this.height) {
          this.velocity = -17;  //17
        //   console.log("this will be the jump");
        }
      }

    fastDown() {
        this.velocity += 10 ;  //17
    } 
} //ends class