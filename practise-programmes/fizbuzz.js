// fizz buzz fizzbuzz

var n = 50

for(let i = 1;i<=n ;i++){
	
	if(i%3 == 0 && i%5 == 0)
	   console.log(`${i} is multiple of both 3 and 5 `)
	 else if (i%3 == 0)
	   console.log(`${i} is multiple of only 3`)
	  else  (i%5 == 0)
	   console.log(`${i} ais multiple of only 5`)
}
console.log(` i reachead limit ${n}`)