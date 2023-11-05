var sec=document.getElementById('sec');
var min=document.getElementById('min');
var mili=document.getElementById('mili-sec');
var seconds=0;
var minutes=0;
var miliseconds=0;
var time_change;



function changetime()
{
    miliseconds++
    if(miliseconds<10){
        mili.innerHTML="0"+miliseconds;
    }
    else if(miliseconds>9 & miliseconds<100)
    {
        mili.innerHTML=miliseconds;
    }
    else if(miliseconds==100){
        seconds++
        miliseconds=0
        mili.innerHTML="00";
    }
    if(seconds==60){
        minutes++
        seconds=0
        sec.innerHTML="00"
    }
    else if(seconds<60 & seconds>9){
        sec.innerHTML=seconds;
    }
    else if(seconds<10){
        sec.innerHTML="0"+seconds;
    }
    if(minutes<10){
        min.innerHTML="0"+minutes;
    }
    else if(minutes>9 &minutes<99){
        min.innerHTML=minutes;
    }
    else if(minutes>99){
        min.innerHTML=minutes;
    }

    
}

function pause(){
    clearInterval(time_change);
    document.getElementsByClassName("start")[0].disabled=false;
    document.getElementsByClassName("pause")[0].disabled=true;
}
function reset(){
    document.getElementsByClassName("start")[0].disabled=false;
    document.getElementsByClassName("pause")[0].disabled=true;
    clearInterval(time_change);
    miliseconds=0;
    seconds=0;
    minutes=0;
    mili.innerHTML="00";
    sec.innerHTML="00";
    min.innerHTML="00";
}
function start(){
    document.getElementsByClassName("start")[0].disabled=true;
    document.getElementsByClassName("pause")[0].disabled=false;
    document.getElementsByClassName("reset")[0].disabled=false;
    time_change=setInterval("changetime()",10);
 }