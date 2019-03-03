// polyndrome

function polyndrome(str){
	var n = str.length
	var count = 0;
    var reversed =  str.split('').reduce((rev , value)=> value+rev,'')
    for(var i=0;i<str.length;i++){
 	if(str.charAt(i) == reversed.charAt(i) ){
 		count++
 	}
 }
 if(count == n){

 	console.log('polyndrome string')
 }
 else
 	console.log("Not a polyndrome")
}



// Another solution
  function poly(str){

     var strrev = str.split('').reverse().join('')
     return strrev === str
  }