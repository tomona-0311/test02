let display = document.getElementById("display");


let startStop = document.getElementById("startStop");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");


let hours = 0;
let minutes = 0;
let seconds = 0;
let mini = 0;


let startTime;
let espsedTime = 0;
let intervalID;
let status="stop";//はじめはlet status;stopから　let status = "stop";
//let interval;

function stopWatch(){
    
    mini++;
    if(mini / 10 == 1){  //miniが１０で割って１になった時、つまり１０になった時を表す。
        seconds++;
        mini= 0;
        if(seconds / 10 == 1){
            minutes++;
            seconds = 0;
            if(minutes / 10 == 1){
            hours++;
            minutes = 0;
            }
            
        }
    }
    
    
   
       display.innerHTML = hours+ ":" + minutes + ":" + seconds + ":" + mini;
} 
 
startStop.addEventListener("click",function(){
  alert("Hellow")
      if(status == "stop"){
 setInterval(stopWatch, 100);//はじめは　letで宣言していたが、上の文でlet interval;しているからlet を消して、stopを起動した。
//今この状態でスタートボタンを押すとはじまるよ。
startTime = newDate()
intervalID = setInterval(function(){elapsedTime += Date.now() - startTimeconsole.log(elapsedTime)},100)
console.log(startStop)
        status == "start";
      }
})
 stop.addEventListener("click",function(){
   alert("good afternoon")
   clearInterval(intervalID)
    if(status == "start"){
  //    clearInterval(interval);
       status = "stop";
}
})
  
reset.addEventListener("click",function(){
 clearInterval(intervalID)
        status = "stop";
   display.innerHTML = "0:0:0:0";
  hours = 0;
   minutes =0;
   seconds = 0;
 
   })