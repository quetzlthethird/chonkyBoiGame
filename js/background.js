class Background {
    constructor(backgroundImage) {
      this.image = backgroundImage;
      this.x = 0;
      this.x = 0;
    }
  
    drawBackground() {
        // console.log('background image')
        fill(255, 255, 255, 100);
        stroke(25);
        rect(width/3, height/3, 333, 267, 20, 20, 20, 20);
        image(this.image, this.x, 0, width, height);
    }
}

    //     this.images.forEach(function (backgroundImage) {
    //         image(backgroundImage.src, backgroundImage.x, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+200, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+300, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+400, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+500, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+600, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+700, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+800, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+900, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+1000, backgroundImage.y, width/10, height/8);
    //         //row one end
    //         image(backgroundImage.src, backgroundImage.x, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y+100, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y+200, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y+300, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y+400, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y+500, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y+600, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y+700, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y+800, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y, width/10, height/8);
    //         image(backgroundImage.src, backgroundImage.x+100, backgroundImage.y++, width/10, height/8);

    //         if (backgroundImage.y >1000) {
    //         backgroundImage.y = height
    //         }
    //     });
    // }