const duck=document.querySelector('#duck');
const score=document.querySelector('#score-counter');
const wrap=document.querySelector('#wrap');
let count = 0;


//вешаем слушателя на утку
duck.addEventListener('click', function(){
    increseScore();//прибавление счетчика
    moveDuck();//перемещение утки
});

//функция прибаления значения счетчика
function increseScore(){
    const score = document.querySelector("#score-counter");
    count++;
    score.textContent = count;
}

//функция перемещения утки
function moveDuck(){
    //получаем размеры экрана чтобы знать область экрана
    const widthCoords = wrap.clientWidth
    const heightCoords = wrap.clientHeight;
    duck.style.left = Math.floor((Math.random() * widthCoords - 100)) + "px";
    duck.style.top = Math.floor((Math.random() * heightCoords - 100)) + "px";
}
