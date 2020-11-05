class Sprite {
    constructor (){
        explode_sprite_sheet = loadSpriteSheet('./assets/characters/pipo-nekonin002.png',171,158,11 );
    }

    clone (){
        // Objects are passed by reference so to have different sprites 
        //using the same animation you need to clone it.
    }

    drawFrame(frame_name,x,y,width,height){

    }
}