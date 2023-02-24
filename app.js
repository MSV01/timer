var startingMin = parseInt(prompt("Enter Starting min"));
var time = startingMin * 60;

var countdownEl = document.getElementById('countdown')

setInterval(updateCountdown, 1000);

function updateCountdown(){
    var min = Math.floor(time / 60);
    var seconds = time % 60;

    countdownEl.innerHTML = `${min}min:${seconds}sec`;
    time--;

}