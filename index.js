//game constants and variables
let direction = {x: 0, y: 0};
const foodSound = new Audio("\foodsound.wav");
const gameOverSound = new Audio("\gameover.mp3");
const moveSound = new Audio("\movesound.mp3");
const musicSound = new Audio("\musicsound.mp3");
let speed = 2;
let lastPaintTime = 0;


//game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed);{
        return;
    }
    lastPaintTime = ctime;
    gameEngine()

}
function gameEngine(){
    
}









//main logic start here
window.requestAnimationFrame(main);





















