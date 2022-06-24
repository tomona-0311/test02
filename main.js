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
let interval;
let status="stop"; //はじめはlet status;stopから　let status = "stop";


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

      if(status == "stop"){
       interval = setInterval(stopWatch, 100);//はじめは　letで宣言していたが、上の文でlet interval;しているからlet を消して、stopを起動した。
//今この状態でスタートボタンを押すとはじまるよ。
startStop.disabled = true;
stop.disabled = false;
reset.disabled = false;

        //status == "start";
}})


 stop.addEventListener("click",function(){
  
   clearInterval(interval)
  

      startStop.disabled = false;
stop.disabled = true;
 console.log(false)
reset.disabled = false;
  //    clearInterval(interval);
       
//if(status == "start"){
 //     startStop.disabled = false;
//stop.disabled = true;
// console.log(false)
//reset.disabled = false;
  //    clearInterval(interval);
   //    status = "stop";
//}
})
  
  
reset.addEventListener("click",function(){
 clearInterval(interval)
        status = "stop";
   display.innerHTML = "0:0:0:0";
  hours = 0;
   minutes =0;
   seconds = 0;
 startStop.disabled = false;
stop.disabled = true;
reset.disabled = true;
   })