let hour=document.querySelector(".hr");
let mins=document.querySelector(".min");
let sec=document.querySelector(".sec");
let format=document.querySelector(".format")
const h1=document.querySelector("h1");
let date =new Date();
let h=date.getHours();
let m=date.getMinutes();
let s=date.getSeconds();
let newformat = h >= 12 ? "P.M" : "A.M";
h = h % 12 || 12;

function displayClock(){
    s++;
    if(s === 60){
        m++;
        s=0;
    }
    else if(m === 60){
        h++;
        m=0;
    }
    else if(h === 12){
        h=0;
        m=0;
        s=0;
    }
    hour.innerHTML=String(h).padStart(2,'0');
    mins.innerHTML=String(m).padStart(2,'0');
    sec.innerHTML=String(s).padStart(2,'0');
    format.innerHTML=newformat;
}

function updateBackground() {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    let gradient = '';

    if (hours >= 6 && hours < 12) {
        // Morning (6 AM to 11:59 AM)
        gradient = 'linear-gradient(to top, #FFB3A7, #F5D0A9)'; 
    } else if (hours >= 12 && hours < 18) {
        // Afternoon (12 PM to 5:59 PM)
        gradient = 'linear-gradient(to top, #FFB347, #FF6F61)';
    } else if (hours >= 18 && hours < 21) {
        // Evening (6 PM to 8:59 PM)
        gradient = 'linear-gradient(to top, #FF5F6D, #9D50BB)';
    } else {
        // Night (9 PM to 5:59 AM)
        gradient = 'linear-gradient(to top, #2C3E50, #000000)';
        h1.style.color ="white"; 
    }

    document.body.style.background = gradient;
}

window.addEventListener("load",()=>{
    setInterval(()=>{
        displayClock();
        updateBackground();},
    1000);
})