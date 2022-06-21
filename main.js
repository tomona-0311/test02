
//document.getElementById("timer").addEventListener("onclick",stertButton);
//function stertButton(){
//$('#timer #startButton').click(function(){
//$('#timer').html('0:0:0:0');
/*global timerUp*/
/*global setIntervalnterval*/
//timer = setIntervalnterval("Countup()", 100);
  
//$(this).attr('disabled' , 'disabled');

var i = 0;
setIntervalnterval(function(){
    console.log(i++);
},1000);
  