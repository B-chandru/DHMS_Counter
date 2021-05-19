
function  count_down(){
    var a=document.getElementById("month").value;
    var b=document.getElementById("date").value;
const countdate = new Date(`${a} ${b}, 2021 00:00:00`).getTime();
const current= new Date().getTime();
const gap = countdate - current;

const sec= 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;

const text_day = Math.floor(gap / day);
const text_hour = Math.floor((gap % day) / hour);
const text_min = Math.floor((gap % hour) / min);
const text_sec = Math.floor((gap % min) / sec) ;

document.getElementById("days").innerText= text_day;
document.getElementById("hours").innerText=text_hour;
document.getElementById("mins").innerText=text_min;
document.getElementById("secs").innerText=text_sec
}




setInterval(count_down, 1000)