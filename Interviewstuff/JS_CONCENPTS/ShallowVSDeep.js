//Object with obly primitives 
var obj1 = {
              name:"Viswa",
              age:'20',
              iswon:true
           }


// Object with primitive and non primitive
 var obj2 = {
              name:"Viswa",
              age:'20',
              iswon:true,
              tech:['Angular','NodeJs','JS'],
              object:[
              {
              name:"Viswa",
              age:'20',
              iswon:true
              },
              {
              name:"Reddy",
              age:'20',
              iswon:true
              }]
           }

//Objects with only non primitives
 var obj2 = {
              tech:['Angular','NodeJs','JS'],
              object:[
              {
              name:"Viswa",
              age:'20',
              iswon:true
              },
              {
              name:"Reddy",
              age:'20',
              iswon:true
              }]
           }



var obj1copy = obj1  // Both are same 

// if i change any property then 

   obj1.age = 40 ;

 // then aslo both are same 40 will be reflecred in obj1copy.age

 /* Shallow copy methods 
    ====================
    1 . [].concat(obj) 
    2. obj.slice()
    3. ...obj
    4. Object.create({},obj)
    5.Object.assign({},obj)
    6. Array.form(arr1)   
 

 */
 /* Deep Copy Methods
 
   1.JSON.parse(JSON.stringify(obj))
   2. ServiceWebWorkers  postmessage() onmessage()
   3. History API - history.pushState(obj, title)     history.state
   4. Notification API("title",{data:obj}).data
   5. Build a cusome recursive function

  */



var obj1concat = [].concat(obj1)  // same 
obj1.age = 50
obj1obj1concat // extpected not to reflect but reflected

