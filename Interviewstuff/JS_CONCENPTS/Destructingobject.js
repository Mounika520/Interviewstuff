function literal$Destruting(address){
    const newAddress = {
    	city:address.city,
    	state:address.state,
    	country:'UnitedStates'
    }
    console.log("city:"+newAddress.city+" state:"+newAddress.state+"")
}

literal$Destruting({city:'kurnool', state:'ap'})




/* ES6 Object Destrcting and template literals for above function */

function literal$Destruting(address){

	const {city ,state} = address
    const newAddress = {
    	city,
    	state,
    	country:'UnitedStates'
    }
    console.log("city:"+newAddress.city+" state:"+newAddress.state+"")
}

literal$Destruting({city:'kurnool', state:'ap'})







