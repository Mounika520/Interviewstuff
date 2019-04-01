var obj =  { 
 
    count : 1
 }

console.log(obj)

function output(){
	console.log("before new declaration",obj)
	obj = {
		count:5
	}
	console.log("after new declaration",obj)
	obj.count = 2 ;
	console.log("Inside function",obj)
	delete obj.count
	console.log("after delete",obj)
	return obj

};

console.log("outside function",output())
console.log("End",obj)

var obj = 1

console.log(obj)

function output(){
	console.log("before new declaration",obj)
	obj =5 
	console.log("after new declaration",obj)
	obj = 2 ;
	console.log("Inside function",obj)
	delete obj
	console.log("after delete",obj)
	return obj

};

console.log("outside function",output())
console.log("End",obj)

