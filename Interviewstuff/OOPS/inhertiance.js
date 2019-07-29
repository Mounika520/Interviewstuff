function vehical(name) {
   this.name = name

}
vehical.prototype.getname = function(){
	console.log(this.name)
}

car.prototype = vehical.prototype

function car(t){
	vehical.call(this, t)
}

var c1 = new car('c1')

c1.getname()



class vehical



[5,6,7,7,8,9]


function vehical(name) {
   this.name = name

}
vehical.prototype.getname = function(){
	console.log(this.name)
}

car.prototype = vehical.prototype

function car(t){
	vehical.call(this, t)
}

var c1 = new car('c1')

c1.getname()