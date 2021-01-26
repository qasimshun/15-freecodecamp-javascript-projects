var counter = 0;
var selectCounter = document.getElementById('count');
var selcetIncrease = document.getElementById('inc');
var selcetReset = document.getElementById('res');
var selcetDecrease = document.getElementById('dec');



function addToCounter(){
    counter++;
    selectCounter.innerHTML = counter;
}

function removeFromCounter(){
    counter--;
    selectCounter.innerHTML = counter;
}

function resetCounter(){
    counter = 0;
    selectCounter.innerHTML = counter;
}

selcetIncrease.addEventListener('click', addToCounter);
selcetReset.addEventListener('click', resetCounter);
selcetDecrease.addEventListener('click', removeFromCounter);