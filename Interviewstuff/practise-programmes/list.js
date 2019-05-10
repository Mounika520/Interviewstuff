var a1 = [1,2,3,4]
var b1 = a1 

console.log(a1) === console.log(b1)


a1.push(5,6,7)


then also 

console.log(a1) === console.log(b1)

[1,2,3,4,5,6,7] == [1,2,3,4,5,6,7]



to avoid this 
var a1 = [1,2,3,4]
var b1 = a1.slice()



then it wont point to refrence  