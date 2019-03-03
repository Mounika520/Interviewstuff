	//  Reference : http://www.tothenew.com/blog/javascript-splice-vs-slice/  




var array=[1,2,3,4,5];
console.log(array.splice(2));
// shows [3, 4, 5], returned removed item(s) as a new array object.
 
console.log(array);
// shows [1, 2], original array altered.
 
var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
// shows [8]
 
console.log(array2.splice(2,0));
//shows [] , as no item(s) removed.
 
console.log(array2);
// shows [6,7,9,0]
 
var array3=[11,12,13,14,15];
console.log(array3.splice(2,1,"Hello","World"));
// shows [13]
 
console.log(array3);
// shows [11, 12, "Hello", "World", 14, 15]
 
           -5 -4 -3 -2 -1
            |  |  |  |  |
var array4=[16,17,18,19,20];
             |  |  |  |  |
             0  1  2  3  4
 
console.log(array4.splice(-2,1,"me"));
// shows  [19]
 
console.log(array4);
// shows [16, 17, 18, "me", 20]






//   If either argument is NaN, it is treated as if it were 0. 


// more than length if we send then it will take lenght 

