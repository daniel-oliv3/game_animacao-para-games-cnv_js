window.onload = function(){

    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var cnv = document.querySelector("canvas");
    var ctx =  cnv.getContext("2d");
    var spriteSheet = new Image();
    spriteSheet.src = "img/img.png";

    var sapup3 = new Sprite(spriteSheet);


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