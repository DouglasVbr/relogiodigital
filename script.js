document.addEventListener('DOMContentLoaded', function() {
const hoursElement = document.querySelector('hours');
const minutesElement = document.querySelector('minutes');
const secondsElement = document.querySelector('seconds');

console.log(hoursElement);
console.log(minutesElement);
console.log(secondsElement);

function newTime() {
    const date = new Date();

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    hoursElement.textContent = fixTime(hours);
    minutesElement.textContent = fixTime(minutes);
    secondsElement.textContent = fixTime(seconds);

}

function fixTime(time) {

    return time < 10 ? '0' + time : time;
}

newTime();
setInterval( newTime, 1000);
});
