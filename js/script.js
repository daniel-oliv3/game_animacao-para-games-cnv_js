window.onload = function(){

    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var cnv = document.querySelector("canvas");
    var ctx =  cnv.getContext("2d");
    var spriteSheet = new Image();
    spriteSheet.src = "img/img.png";

    var sapup3 = new Sprite(spriteSheet);


    

    //interação
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);

    
    function keydownHandler(e){
        switch(e.keyCode){
            case RIGHT:
                sapup3.mvRight = true;
                sapup3.mvLeft = false;
                sapup3.mvUp = false;
                sapup3.mvDown = false;
                break;
            case LEFT:
                sapup3.mvRight = false;
                sapup3.mvLeft = true;
                sapup3.mvUp = false;
                sapup3.mvDown = false;
                break;
            case UP:
                sapup3.mvRight = false;
                sapup3.mvLeft = false;
                sapup3.mvUp = true;
                sapup3.mvDown = false;
                break;
            case DOWN:
                sapup3.mvRight = false;
                sapup3.mvLeft = false;
                sapup3.mvUp = false;
                sapup3.mvDown = true;
                break;    
        }
    }

    function keyupHandler(e){
        switch(e.keyCode){
            case RIGHT:
                sapup3.mvRight = false;
                sapup3.mvLeft = true;
                sapup3.mvUp = true;
                sapup3.mvDown = true;
                break;
            case LEFT:
                sapup3.mvRight = true;
                sapup3.mvLeft = false;
                sapup3.mvUp = true;
                sapup3.mvDown = true;
                break;
            case UP:
                sapup3.mvRight = true;
                sapup3.mvLeft = true;
                sapup3.mvUp = false;
                sapup3.mvDown = true;
                break;
            case DOWN:
                sapup3.mvRight = true;
                sapup3.mvLeft = true;
                sapup3.mvUp = true;
                sapup3.mvDown = false;
                break;    
        }
    }

    spriteSheet.onload = function(){
        init();
    }

    function init(){
        loop();
    }

    function update(){

    }

    function draw(){
        sapup3.draw(ctx);
    }

    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        draw();
    }
}