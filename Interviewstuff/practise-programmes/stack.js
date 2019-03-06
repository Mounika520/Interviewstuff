/*   Code written by Viswa  */

var stack  = [];
var top = 5;
function add(argument) {
	if(stack.length == "5"){
		console.log("stack is Full ")
	}else
	stack.push(argument)
}

function remove(argument) {
	if(stack.length == "0"){
		console.log("stack is empty ")
	}
	stack.pop(stack.length - 1)
}

function printstack (){
	console.log("Stack values  ")
	for (var i= 0 ;i <stack.length ; i++){
		console.log(stack[i])
		console.log("\n")
	}
}

add(20)
add(40)
add(20)
remove()
printstack()