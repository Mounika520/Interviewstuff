 6 Data types : 
=================================================
 5 - primitives  == ( boolean , number ,string ,null , undefined  )
 1 - Reference   ==  Object

 
 Arrays :
 ============
 var array = [10,20,'viswa']  or  var array = new Array(10,20,'viswa')   // Both are same  

 But if we have Constructor with single element then it will bheave quite different 

 var a = [1]   //1
 new Array(1)  // [empty]    
             


 Arrays are not  special data types but  array elements are just like properties in objects 

 var obj = {
 	name:'viswa',
 	0 : 10 ,
 	'': 'empty'
 }

obj.name // Viswa
obj.0    // Uncaught SyntaxError: Unexpected number
obj[0]   // 10 
obj['']  // empty


You can search, sort, delete, insert and even simulate behavior of other collection data types, like queue and stack.

Remember:

arrays are normal objects and their elements are properties with names 0, 1, .. etc.
arrays also have a special properties lenght and many function that can manipulate the elements


Detecting an array (instanceof)(Big problem in single page or single global scope ) 
=======================================================================

The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

function Car(brand , model ,year){
	this.brand  = brand ;
	this.model = model ;
	this.year  =  year
}
var car1  = new Car('Maruthi' ,'Suziki' ,1995)

console.log ( car1   instanceof  Car)  // true

console.log(car1 instanceof Object);
// expected output: true

Length
======
Array length always calculate as [ last index + 1  ]
var a = [ 10 ,50,20]
a.length   /// 3 
a[20] = 50 ;
a.length // 21

Adding custom methods to arrays by using prototypebased concept
===============================================================

var arr = [2, 2, 3, 4]

Array.prototype.first = function() {
return this[0];
}

console.log(arr.first()); // prints 1


array sorting :
===========

By defualt it will convert to strings inside elements then it will try to sort 

var a  = [4,3,1,10]

a.sort() // 1 10 3 4 

a.sort((el1, el2) => el1 - el2)  // Correct reuslts  if( el > e2 ) return + else if( e1 < e2 ) return - else  return 0


Object Sorting : 
==============

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

sorting by value : 
items.sort(function (a, b) {
  return a.value - b.value;
});

sorting by name :

items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});



Concat : 
Cant alter array but only append in the end .. accepeets any number of aruguments

slice()
Similar to concat(), slice creates a copy of the array and extracts a subsequence of it. Used with no parameters, it returns a copy of the original. With one argument - index -, returns all elements from that index to the end. Additionally, it can be used with 2 arguments - start_index and end_index, in which case it will return all elements in that interval (excluding the one from last_index).

The function can be used with a negative value as parameter. In this case, the start index will be counted from the end of the array - start_index = array.length - param

splice()
Splice() has very similar use cases like concat() and splice(), the only difference is that the operation is made on the original 

array.splice(index , deletecount , elemtes to add )

special if single arugument :  delete all incuding self index
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// myFish is ["angel", "clown"] 
// removed is ["mandarin", "sturgeon"]

Negative index is used in python to index starting from the last element of the list, tuple or any other container class which supports indexing. -1 refers to the last index, -2 refers to the second last index and so on.


Methods repeativel perform on the arrays :
=========================================
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

every() – returns true if function returns true on every item
var every_result_is_smaller_than_9 = numbers.every(function(item) { return item < 9; });


filter() – returns an array of all items for which the function returns true
var odd_numbers = numbers.filter(item => item % 2 == 1);
console.log(odd_numbers); 



forEach() – no return value (just run the function on every element in the list)

numbers.forEach(item => console.log("works"));


map() – returns a new list with the result of each item in an array
some() – returns true if the function returns true for at least one of the items


