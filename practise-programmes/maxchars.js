// max charecters repeated in string 

function maxchar(str){
	var max = 0; 
	for(var i=0 ;i< str.length;i++){
		  var count = 0;
		  var char ;
        for(var j=i+1 ;j<str.length ;j++){
        	if(str.charAt(i) == str.charAt(j)){
        		count++;
        	}
        	debugger
        	if(count > max ){
        		max = count
        		char = str.charAt(i)
        	}
        }
	}
	console.log(`max repeated char in string is ${char}` )
}

maxchar("Hiahihaiiiiii")