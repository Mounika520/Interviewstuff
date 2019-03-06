//fibonacci_series

var a = b =1 ,c;
function fibonacci(n){
      console.log(`${a}`)
      console.log(b)
     for(let i=0;i<n;i++){ 
	
		c = a+b
		if( c >= n){
			return ;
	 }
	 console.log(c)
		a = b;
		b = c ;
    }
}

fibonacci(50)



//with recursive 

var f1= 0 ,f2 = 1 ,f3=0;
console.log(f1 , f2)
function fibbrec(f1,f2){ 
   
	f3 = f1+f2; 
   if( f3 >= 100){
   	return;
   }
   console.log(f3);
   f1 = f2
   f2 = f3
   return fibb(f1,f2)
}
fibb(f1,f2)