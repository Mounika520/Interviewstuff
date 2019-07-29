/*  questions on this  */

var obj = {
   a:5,
   getvalue : function(){
   	  console.log(this.a)     //a = 5 
   }

}
obj.getvalue()


// question
var a = 10
var obj = {
   'a':5,
   getvalue : function(){
   	  console.log(this.a)     //a = 5 
   }

}
var callme = obj.getvalue
console.dir(callme)
callme() // undefiend 


callme.call(this,obj)    