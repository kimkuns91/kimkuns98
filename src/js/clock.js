const clock = document.querySelector("div#clock");
const datee = clock.querySelector('p.date');
const timee = clock.querySelector('p.time');
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function time() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const secs = String(date.getSeconds()).padStart(2, "0");
    datee.innerHTML = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${week[date.getDay()]}`
    timee.innerHTML = `${hour}:${mins}:${secs}`;
}

setInterval(time, 1000);

