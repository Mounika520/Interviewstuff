var roadtrip= 5000

var mytrip = {
	roadtrip : 3000,
	getmytripcost  :function () {
		return this.roadtrip
	}
}

var mytripcost = mytrip.getmytripcost

console.log(mytripcost())  //5000



to fix this 

var roadtrip= 5000

var mytrip = {
	roadtrip : 3000,
	getmytripcost  :function () {
		return this.roadtrip
	}
}

var mytripcost = mytrip.getmytripcost.bind(mytrip)

console.log(mytripcost())

