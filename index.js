//game constants and variables
let direction = {x: 0, y: 0};
const foodSound = new Audio("\foodsound.wav");
const gameOverSound = new Audio("\gameover.mp3");
const moveSound = new Audio("\movesound.mp3");
const musicSound = new Audio("\musicsound.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr =[
    {x: 13, y:15}
]
food = {x: 13, y:15};


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
    //part 1: updating the snake array & food

    //part 2: display the snake and food 
    //display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add("head");
        board.appendChild(snakeElement);
    });
    //display the food
        foodElement = document.createElement("div");
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add("food");
        board.appendChild(foodElement);
}









//main logic start here
window.requestAnimationFrame(main);





















