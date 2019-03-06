// Factorial without recursive 

var n = 5;
 var factorial = function(n){
	var sum = 1;
    for (var i=n;i>1;i--){

         sum =  sum * (i )
      
    }
   return sum;
}
console.log(`Factorial Value of ${n} is :${factorial(5)}`)

console.log(`factorial  ${factorial}`)


// using recursive 
var sum  = 0;
var n = 5
function factrec(n) {
    
	if(n == 1)
		return 1;
	else
		return n*factrec(n-1)
		
}
factrec(n)