console.log("promt.js file  is working ")

function excutepromt(){

	var a = parseInt(prompt("Enter a number"))
	if(isNaN(a)){
		alert("Enter only numbers click the button again" )
	} 
	else{
		for(var i=0;i<=10;i++){

			 var node = document.createElement("LI");
             var textnode = document.createTextNode((`${a} X ${i} = ${a*i}`));
             node.appendChild(textnode);
             document.getElementById("myList").appendChild(node);
			// 
			 var textnode = document.createElement('p')
			 var child = document.createTextNode(`${a} X ${i} = ${a*i}`);
			 textnode.appendChild(child)
			document.getElementById('tables').appendchild(textnode)
		}
	}
}