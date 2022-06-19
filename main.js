let timer =document.getElementById("timer")；

let buttons =document.getElementById("buttons")；

let start =document.getElementById("start")；
let stop =document.getElementById("stop")；
let buttons =document.getElementById("buttons")；
let reset =document.getElementById("reset")；





function eventA(){
  //変数名を記入
  
  let hours = 0;
let minutes = 0;
let seconds= 0;

  

seconds++;
if(seconds / 60 ==1){
    minutes++;
    seconds =0;
    if(minutes / 60 ==1){
      hours++;
      minutes =0;
    }
  }
}

function timer(){
timer.innterHTML = hours + ":" + minutes + ":" + seconds;
}

//スタート
  start=setinterval("timer".100);}

second console.log(timer);


}