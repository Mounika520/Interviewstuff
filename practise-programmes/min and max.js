//min and max

function max(arr){

	return arr.reduce((res, value)=>{
		 if(value > res){
		 	 res = value;
		  }
		  return res
	},'')
}
max([10,85,20,10,45])

function min(arr){

	return arr.reduce((res,value)=> { 
		debugger
		  if(res == '')
		  	res = value;
          if (value <res ){
              res  = value
          }
          return res
	},'')
}

min([10,85,20,5,45])


// Another way 

function min(arr){
	
}