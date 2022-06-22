let display = document.getElementById("display");


let startStop = document.getElementById("startStop");
let stopp = document.getElementById("stopp");
let reset = document.getElementById("reset");


let hours = 0;
let minutes = 0;
let seconds = 0;
let mini = 0;



let status="stop";//はじめはlet status;stopから　let status = "stop";
let interval;

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
        setInterval(stopWatch, 100);//はじめは　letで宣言していたが、上の文でlet interval;しているからlet を消して、stopを起動した。
//今この状態でスタートボタンを押すとはじまるよ。
        status == "start";
      }
})
 stopp.addEventListener("click",function(){
    if(status == "start"){
      clearInterval(interval);
       status = "stop";
}
})
  //   if(status == "stop"){
   //  interval =
   //  setInterval(stopWatch, 100);//はじめは　letで宣言していたが、上の文でlet interval;しているからlet を消して、stopを起動した。
 //  startStop.innerHTML = "STOP";
   // status = "start";
   //  }else{
  //       clearInterval(interval);
  //       startStop.innserHTML = "START";
  //       status = "stop";
     
    
     
// stopp.addEventListener("click",function(){
   //  clearInterval(interval);
   //  status = "stop";

 
reset.addEventListener("click",function(){
   clearInterval(interval);
 //    startStop.innserHTML = "START";
        status = "stop";
   display.innerHTML = "0:0:0:0";
  hours = 0;
   minutes =0;
   seconds = 0;
 
   })