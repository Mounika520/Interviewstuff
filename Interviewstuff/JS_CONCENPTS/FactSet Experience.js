//FactSet Experience 


var a = 5 ;
function sum(){
	console.log(a)
	a= 10;
	console.log(a)
}
sum()

//output 5,10



var b = 5 ;
function sum(){
	console.log(b)
	var b= 10;
	console.log(b)
}
sum()

//output undefiend , 10 


function sum(){
	console.log(d)
	  d = 10 ;
     var d
}
sum()




true  == 'true'  // false

true  === 'true'  // false 


Difference btween null vs undefiend vs not-defined   null == undefined


Hosting : Varaibles can be accessed before delcartion . Hosting applicable to both Varaibles and function 



var a = 5 ;

function increment(b){
	a+b
}
increment(a)
console.log(a)