/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red while the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck = document.getElementById('puck');
var puck_x = 210;
var puck_y = 210;
puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';
var speed = 50;

document.getElementById('puck').style.top = puck_y + 'px';
document.getElementById('puck').style.left = puck_x + 'px';

function logCoords() {
    console.log('x=' + puck_x + ' y=' + puck_y);
    
    //x teleporty
    if (puck_x > 600){
        puck_x -= 600;
    } 
    else if (puck_x < 0){
        puck_x += 600;
    }
    //y teleporty
    if (puck_y < 0){
        puck_y += 400;
    }
    else if(puck_y > 400){
        puck_y -=400
    }
}

function checkColl(){
    if((puck_x >= 250 && puck_x <=350)&&(puck_y >=150 && puck_y <=250)) {
        console.log('collision')
        document.getElementById('gap').style.backgroundColor = 'red';
    }
    else document.getElementById('gap').style.backgroundColor = 'white';
}   

document.getElementById('left').addEventListener('click', () => {
    puck_x -= speed;
   puck.style.left = puck_x + 'px';
   logCoords();
   checkColl()
})

document.getElementById('right').addEventListener('click', () => {
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoords();
    checkColl()
})

document.getElementById('up').addEventListener('click', () => {
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoords();
    checkColl()
})

document.getElementById('down').addEventListener('click', () => {
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoords();
    checkColl()
})