let a = [1,2,3,4,45,5,,6,6]

let b = [...a]

similary we can apply on objects as well

var a = {
	name:'viswa'
}

var b = {

	...a
}


// this speard operator will not work if values are non primites eg: arrays or objects agian

then we need to use JSON.parse(JSON.strigity(obj))


// REST oeprator :

passing spread ...name in parmas is called rest operator





boxesArr6

const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

