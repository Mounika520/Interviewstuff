/*   FOR in VS FOR of    */

// For "IN" will use to repeat iterators like arrays , Maps , Sets , genarators ,DOM node caluclations 

function forof(){
var animals = ['dog','cat','puppy','peackoak']

for (let ani of animals){
	console.log(`Printing the animals with index's ${ani} --> ${animals[ani]}`);
}
}

// if i want to print index along with values then  i can go for "FORIN"

function forin(){
var animals = ['dog','cat','puppy','peackoak']

for (let ani in animals){
	console.log(`Printing the animals with index's ${ani} --> ${animals[ani]}`);
}
}



// For objects i will go for "FOR IN to print property and its value"NOTES.JS

var fruits = {

	'apple':100,
	'Mango':50,
	'Banana':10,
	'custered':250,
	'dozen':'Twlele'
}

for (let fruit in fruits){
	console.log(`Printing fruits and cost ${fruit}  ==>  ${fruits[fruit]} `)
}