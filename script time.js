const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const daysElement = document.getElementById('days');
const monthsElement = document.getElementById('months');
const yearsElement = document.getElementById('years');

function updateTime() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hoursElement.textContent = fixTime(hours);
    minutesElement.textContent = fixTime(minutes);
    secondsElement.textContent = fixTime(seconds);
}

function updateDate() {
    const date = new Date();

    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();

    daysElement.textContent = fixDate(days);
    monthsElement.textContent = fixDate(months);
    yearsElement.textContent = fixTime(years);
}

function fixTime(time) {
    return time < 10 ? '0' + time : time
}

function fixDate(date) {
    return date < 10 ? '0' + date : date
}

updateTime();
updateDate();
setInterval(updateTime, 1000);
setInterval(updateDate, 1000);