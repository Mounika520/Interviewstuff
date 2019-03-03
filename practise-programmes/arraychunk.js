//arraychunk

function arraychunks(arr,size){
	var chunked = []
	for(var element of arr){

	     var last = chunked[chunked.length -1]
	     if(!last || last.length === size){
	     	chunked.push([element])
	     }
	     else
	     	last.push(element)

	}
	console.log(chunked)
}


arraychunks([1,5,4,78,4,5,4,1] , 2)


