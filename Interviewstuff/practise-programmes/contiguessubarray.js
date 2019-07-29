// No of sub arrays with n odd elemnts :


function excuteme(m){
var arr = [1,2,4,2,4,5,4] 

debugger

var toset = new Set(arr)
var removedups = [...toset]
var n = removedups.length
var subarray = []
for(var i=0;i<n;i++){
	 
	for(var j=i;j<n;j++){
	     var temp = []
		for(k=0;k<=j;k++){ 
		   
           temp.push(removedups[k])
		}
		console.log("SubArray" ,subarray)
		if(countodd(temp,m))
        {
		subarray.push(temp)
	    }
	}

}
console.log( subarray)
}


function countodd(arr,m){
	var  count = 0
	for(var i=0;i<arr.length;i++){
		if(arr[i] %2 === 1){
			count++
		}
	}
	return count <=m?true:false
}