var  si = function(){
	var instance
	var createinstance = function(){
		return new Object("This is single instance ")
	}
	return {
		 getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
	}
}

var one = new si()
var two = new si()

one.getInstance