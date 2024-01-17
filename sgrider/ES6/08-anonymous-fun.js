
function func0(){
    console.log('I am function!!!');
}

var func1 = function() {
	console.log("Anonymous Function");
}

var func2 = ()=>{
	console.log("Fat Arrow");
}

var func3 = (a,b)=>{
	console.log("a+b", a+b);
    return a+b;
}

//this is return value of a+b
var func4 = (a,b) => a+b;


// Calling
func1();
func2();
func3(10,20)

