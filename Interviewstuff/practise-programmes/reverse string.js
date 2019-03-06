//reverse string


function reverse(str) {

	var n = str.length
	var strrev = '';
	
    for(var i = n-1;i >= 0; i--){

        strrev = strrev +  str.charAt(i) 
    }
    
    return strrev

}
reverse("VISWA")



// Another solution


function reverse(str){

   return str.split('').reverse().join('')
}


// Another solution
 
function rev(str){
	rev = '';
	for(let char of str){
      
      rev = char + rev;
	}
	return rev
}


//using reduce 

function stringrev(str){

   return str.split('').reduce((rev,char)=> char+rev,'')
}










