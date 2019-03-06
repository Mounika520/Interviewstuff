var queue = [];

// Adding elements into Q
function add(argument) {
	queue.push(argument)
}

function remove() {
	queue.unshift()
}

function printqueue (){
	console.log("Stack values  ")
	for (var i= 0 ;i <queue.length ; i++){
		console.log(queue[i])
		console.log("\n")
	}
}
add(10)
add(15)
add(20)