var randomInteger = 0;
var badass = new Array();

function getRandomInteger(min, max) {
    randomInteger = Math.floor((Math.random() * max) + min);
    return randomInteger;
}




function newEnemy() {
    
        for (i = 0; i < 4; i++) {
            var enemy = {
                x: getRandomInteger(20, 560),
                y: getRandomInteger(20, 560),
                w: 40,
                h: 40,
                speed: 5,
                direction: getRandomInteger(0, 4)
            };
          badass.push(enemy);
        }
    };

 
function moveEnemies() {
        
    for (var i in badass) {
        switch (badass[i].direction) {
            case 0:
                badass[i].x -= badass[i].speed;
                if (badass[i].x < 20) {
                    badass[i].direction = 1;
                }
                break;
            case 1:
                badass[i].x += badass[i].speed;
                if (badass[i].x > 580) {
                    badass[i].direction = 0;
                }
                break;
            case 2:
                badass[i].y -= badass[i].speed;
                if (badass[i].y < 20) {
                    badass[i].direction = 3;
                }
                break;
            case 3:
                badass[i].y += badass[i].speed;
                if (badass[i].y > 580) {
                    badass[i].direction = 2;
                }
        break;    
        }
    }
};


var bottle = new Image();
bottle.src = "assets/bottle.png"


function drawEnemies(context) {
    
    $.each(badass, function(index, ass) {
        var x = ass.x - (ass.w / 2);
        var y = ass.y - (ass.h / 2);
    
        context.drawImage(
        bottle,
        x,
        y,
        ass.w,
        ass.h);
    });
    
    
};

