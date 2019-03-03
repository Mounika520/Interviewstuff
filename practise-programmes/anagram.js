//anagram.js

function anagram(str1,str2){
	if( str1.length  == str2.length){

	   var count = 0
       for(var i =0 ; i < str1.length ;i++){
          
       	    for (var j =0; j< str2.length ; j++){

       	    	 if(str1.charAt(i) == str2.charAt(j)){
       	    	 	count++;
       	    	 	break;
       	    	 }
       	    }
       }
       console.log(count)
       console.log(str1.length)
       if(count == str1.length){
       	  console.log(` ${str1} is  an angram of ${str2}`)
       }
	}
	else
	  console.log(` ${str1} is not an angram of ${str2} `)
}

anagram('lol','lol')