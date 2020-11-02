class Player {
    constructor(playerImage){
        this.image = playerImage;
        this.height = 78;
        this.width = 80;
        this.x = 0;
        this.y = height - this.height;
        this.score = 0;
    }

    drawPlayer(){
        image(this.image, this.x, this.y);
    }

    moveLeft() {
        if (this.x >0){
        this.x -= 100
        }
        // this.image = loadImage('assets/character-left.png');
    }
    moveRight() {
        if (this.x < 1000-this.width){
        this.x += 100
        }
        // this.image = loadImage('assets/character-right.png');
    }

    addPoint() {
        let playerScoreCard = document.getElementById('player1')
        console.log(playerScoreCard);
        playerScoreCard.innerText = player.score;
        console.log(playerScore);
    }
}

// class Player2 extends Player {
//     constructor(playerImage){
//         this.image = playerImage;
//         this.height = 234;
//         this.width = 264;
//         this.x = 1000;
//         this.y = height - this.height;
//     }
// }