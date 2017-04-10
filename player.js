

    var player = {
        x: 300,
        y: 300,
        w: 70,
        h: 70,
        speed: 6
    };
    
    function changeSpeed(p) {
        player.speed += p;
    };

    function reset() {
        player.x = 300;
        player.y = 300;
        player.speed = 6;
        
        badass.splice(0, 4);
        newEnemy();
    }
    
    
     var dude = new Image();
     dude.src = "assets/dude.png";

    
     function drawPlayer(context) {
        var x = player.x - (player.w / 2);
        var y = player.y - (player.h / 2);
        context.drawImage(
        dude,
        x,
        y,
        player.w,
        player.h);
    };
    
    
    var keysDown = {};
    
    function movePlayer(direction) {
        switch (direction) {
            case "left":
                player.x -= player.speed;
                if (player.x < 20) {
                    player.x = 20;
                }
                break;
            case "right":
                player.x += player.speed;
                if (player.x > 580) {
                    player.x = 580;
                }
                break;
            case "up":
                player.y -= player.speed;
                if (player.y < 20) {
                    player.y = 20;
                }
                break;
            case "down":
                player.y += player.speed;
                if (player.y > 580) {
                    player.y = 580;
                }
                break;    
        }
    };
    
    window.addEventListener('keydown', function(e) {
        keysDown[e.keyCode] = true;
    });
    
    window.addEventListener('keyup', function(e) {
         delete keysDown[e.keyCode];
    });
    
    
    
    function update() {
        if (38 in keysDown) {
            movePlayer('up');
        }
        if (40 in keysDown) {
            movePlayer('down');
        }
        if (37 in keysDown) {
            movePlayer('left');
        }
        if (39 in keysDown) {
            movePlayer('right');
        }
    
    };


    function collision() {
        for (var i in badass) {
            if (
		        player.x <= (badass[i].x + 40)
		        && badass[i].x <= (player.x + 40)
		        && player.y <= (badass[i].y + 40)
		        && badass[i].y <= (player.y + 40)
	           ) {
                    if (badass[i].direction == 0) {
                        badass[i].direction = 1;
                        break;
                    }
                    if (badass[i].direction == 1) {
                        badass[i].direction = 0;
                        break;
                    }
                    if (badass[i].direction == 2) {
                        badass[i].direction = 3;
                        break;
	                }
                    if (badass[i].direction == 3) {
                        badass[i].direction = 2;
                        break;
                    }
            }
        }
    };


      