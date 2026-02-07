'use strict';

let newX = 0;
let newY = 0;
let startX = 0;
let startY = 0;

/*const stickers = document.querySelector('.sticker');
for(let i = 0; i < stickers.length; i++){
    stickers[i].addEventListener('mousedown', mouseDown);
}*/

const sticker = document.getElementById('sticker');
sticker.addEventListener('mousedown', mouseDown);

function mouseDown(event){
    startX = event.clientX;
    startY = event.clientY; 

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(event){
    newX = startX - event.clientX;
    newY = startY - event.clientY;

    startX = event.clientX;
    startY = event.clientY;

    sticker.style.top = (sticker.offsetTop - newY) + 'px';
    sticker.style.left = (sticker.offsetTop - newX) + 'px';
}

function mouseUp(event){
    document.removeEventListener('mousemove', mouseMove);
}

// clone sticker as a child in .letter
function clone(event){
    const letter = document.querySelector('.letter');
    const newSticker = letter.createElement('img');
    newSticker.setAttribute('src', event.target.getAttribute('src'));
}