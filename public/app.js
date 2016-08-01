"use strict";

const recordBtn = document.getElementById('recordBtn');
console.log(recordBtn);

recordBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('Button Clicked');
});
