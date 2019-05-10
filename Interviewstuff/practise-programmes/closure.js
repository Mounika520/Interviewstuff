var globalvaribale = "I am globalvaribale"

function outer(parmsouter){

	var ouervaraible = "i am oueterfunction variable "

	function inner(parmsinner){

		var innervaraible  = 'i am innervaraible'
		console.log(globalvaribale,ouervaraible,innervaraible,parmsinner,parmsouter)
	}
	inner("I AM INNER PRAMETER")
}
outer("I AM OUTER PRAMETER")