
let timerStarted = false;
const popup = Math.floor(Math.random() * 4 + 2)
console.log(popup);

document.getElementById("myButton").onclick = function(){
    document.getElementById("changetext").innerHTML = "Wait for the green screen";
    this.style.backgroundColor = "red";
    if(!timerStarted)
    timerStarted = true;
}


setTimeout(function() {
    if(timerStarted)
    myButton.style.backgroundColor = "green"; 
}, 3000 * popup); 





