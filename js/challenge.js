document.addEventListener("DOMContentLoaded", () => {
    
const counter = document.getElementById('counter');
counter.innerText = 0;
let interval = setInterval(startCounter, 1000);

const buttonMinus = document.getElementById('minus');
const buttonPlus = document.getElementById('plus');
const buttonPause = document.getElementById('pause');
const buttonHeart = document.getElementById('heart');
const ul = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');

let likesTracker = {};
let liked = 0;


buttonMinus.addEventListener('click',decreaseCounter);
buttonPlus.addEventListener('click',increaseCounter);
buttonPause.addEventListener('click',pauseCounter);
buttonHeart.addEventListener('click',likeCounter);
commentForm.addEventListener('submit', printComments);




function startCounter(){
    counter.innerText++;
}


function decreaseCounter (){
    counter.innerText--;
}

function increaseCounter(){
    counter.innerText++;
}

function pauseCounter(){

    if (buttonPause.innerText === 'pause'){
        
        buttonPause.innerText = 'resume';
        clearTimeout(interval);
        console.log(counter.innerText);

    } else if (buttonPause.innerText === 'resume'){
        clearTimeout(interval);
        setInterval(startCounter, 1000);
        buttonPause.innerText = 'pause';
    }
}


function likeCounter (){
    const li = document.createElement('li');
    li.innerText = `${counter.innerText} has been liked  times!`
    ul.append(li);

    
    let y = counter.innerText;
    likesTracker[y];
    let x = parseInt(counter.innerText);

    
    likesTracker[y] = x/x;
    likesTracker[y]++;

    
    

    console.log(likesTracker); 



}

function printComments(event){
    event.preventDefault();

    const p = document.createElement('p');
    const div = document.getElementById('list');
    p.innerText = document.getElementById('comment-input').value;
    div.append(p); 


    event.target.reset();

    

}










});