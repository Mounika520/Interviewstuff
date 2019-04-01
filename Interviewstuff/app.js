var a = [1,2,3,4,5,6,7,8,9,10]

var present =  1;



function left(){
if(present ==1)
present=10
   else
{
    present=present-1;
}
 document.getElementById("one").innerHTML = present-1;
 document.getElementById("two").innerHTML = present;
 document.getElementById("three").innerHTML = present+1;
 }


function right(){
   if(present==10){
   present=1
   }
   else
   present=present+1;
 document.getElementById("display_me").innerHTML = present;
  document.getElementById("one").innerHTML = present;
  document.getElementById("two").innerHTML = present+1;
  document.getElementById("three").innerHTML = present+2;
 }

//function second(value){
//  this.present = value ;
//  document.getElementById("two").innerHTML = present;
//  document.getElementById("display_me").innerHTML = present;
//}
//
//
//function three(value){
//
//   this.present = value;
//  document.getElementById("three").innerHTML = present;
//  document.getElementById("display_me").innerHTML = present;
//}
