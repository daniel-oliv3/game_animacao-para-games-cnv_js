window.onload = function(){

    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var cnv = document.querySelector("canvas");
    var ctx =  cnv.getContext("2d");
    var spriteSheet = new Image();
    spriteSheet.src = "img/img.png";
    var sapup3 = new Sprite(spriteSheet);
    var scene = new Image();
    scene.src = "img/scene.png";


    

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
                break;
            case LEFT:
                sapup3.mvLeft = false;
                break;
            case UP:
                sapup3.mvUp = false;
                break;
            case DOWN:
                sapup3.mvDown = false;
                break;    
        }
    }

    spriteSheet.onload = function(){
        init();
    }

    function init(){
        sapup3.posX = sapup3.posY = 150;
        loop();
    }

    function update(){
        sapup3.move();
    }

    function draw(){
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        ctx.drawImage(scene, 0, 0, scene.width, scene.height, 0, 0, cnv.width, cnv.height);
        sapup3.draw(ctx);
    }

    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        draw();
    }
}