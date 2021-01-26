var colors = ['red', 'green', 'blue', 'yellow'];

var bigMiddle = document.getElementsByClassName('middle-full-box');
var button = document.getElementById('btn');
var colorValue = document.getElementById('value');

button.addEventListener('click', function(){
    let random = randomNumberGenerator();
    document.body.style.backgroundColor = colors[random];
    colorValue.textContent=colors[random];
}, false);


function randomNumberGenerator() {
    return Math.floor(Math.random()*colors.length);
}