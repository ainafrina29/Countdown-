//ending, current, subtract date
const hariRaya = '13 May 2021'
const daysCount = document.getElementById('days');
const hoursCount = document.getElementById('hours');
const minsCount = document.getElementById('mins');    
const secondsCount = document.getElementById('seconds');                         

function countdown(){
    const rayaDate = new Date(hariRaya);
    const currentDate = new Date();
    
    const totalSeconds = (rayaDate - currentDate) / 1000; // 1000 milliseconds
    
    const days = Math.floor(totalSeconds / 3600 / 24); // 24 hours 3600 seconds
    const hours = Math.floor(totalSeconds / 3600) % 24; 
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    //console.log(days, hours, minutes, seconds);  

    daysCount.innerHTML = days;
    hoursCount.innerHTML = formatTime(hours);
    minsCount.innerHTML = formatTime(minutes);
    secondsCount.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown(); //initital call

setInterval(countdown, 1000); // call countdown every 1 seconds

