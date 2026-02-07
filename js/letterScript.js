'use strict';

const stickers = document.querySelector('.sticker');
for(let i = 0; i < stickers.length; i++){
    stickers[i].addEventListener('click', clone);
}

// clone sticker as a child in .letter
function clone(event){
    const letter = document.querySelector('.letter');
    const newSticker = letter.createElement('img');
    newSticker.setAttribute('src', event.target.getAttribute('src'));
}