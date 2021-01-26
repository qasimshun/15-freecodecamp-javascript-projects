var colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

var bigMiddle = document.getElementsByClassName('middle-full-box');
var button = document.getElementById('btn');
var colorValue = document.getElementById('value');

button.addEventListener('click', function(){
    let hexColor = "#";
    for(let i=0;i<6;i++){
        hexColor += colors[randomNumberGenerator()];
    }
    document.body.style.backgroundColor = hexColor
    colorValue.textContent=hexColor
}, false);


function randomNumberGenerator() {
    return Math.floor(Math.random()*colors.length);
}