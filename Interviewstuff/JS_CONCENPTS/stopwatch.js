how to create privite varaible / setters and getters are includeed in the function


var stopwatch = function(){
	var duration = 0;
	
    var count = 0
 	Object.defineProperty(this, 'duration', {
         get:function(){
            return count	
         } 
    });
    this.start = function(){
         duration =  setInterval(function(){
           count++
         },1000)
    }
    this.reset = function(){
        count = 0;
    }
    this.stop = function(){
        clearInterval(duration);
        console.log(`Counter stoped at ${count}`)
    }
}
