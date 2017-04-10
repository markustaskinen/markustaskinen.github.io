$(document).ready( function () {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    document.body.appendChild(canvas);
    
    newEnemy();
   
    var bgimage = new Image();
    bgimage.src = "assets/beach.png";
    
    var render = function() {
        //context.fillStyle = "#000000";
        //context.fillRect(0, 0, 600, 600);
        context.drawImage(bgimage, 0, 0, canvas.width, canvas.height);
        
        drawPlayer(context);
        drawEnemies(context);
    };
    
    

    
    
    function main() {
        update();
        render();
        requestAnimationFrame(main);
        collision();
        moveEnemies();
    };
    
    main(); 
    
    
    
});