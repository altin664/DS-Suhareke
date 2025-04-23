var  wakeuptime;
var  dstime;
var  sleeptime;
var  noon = 12;


function showCurrentTime(){ 
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinus

    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM";
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
    changeImage();


};

var oneSecomnd = 1000;

setInterval(showCurrentTime, oneSecond);

function changeImage (){
    var time = new Date().getElementById("timeImage");

    if(time == wakeuptime){
        images = "morning.gif";
        console.log("morning");
    }
     
    else if (time == dstime){
        images ="class.gif"

    }

    else if(time == sleepTime){
        images ="night.gif";
    }
    imageHTML.src = image;
    console.log(imageHTML.src);

}

function updateClock(){
    var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector')

    wakeuptime=wakeUpTimeSelector.value;

    var dsTimeSelector = document.getElementById('dsTimeSelector')
    dstime = dsTimeSelector.value;

    var sleepTimeSelector=document.getElementById('sleepTimeSelector')
    sleeptime = sleepTimeSelector.value;

}
var saveButton = document.getElementById("saveButtone")
saveButton.addEventListener("click",updateClock);