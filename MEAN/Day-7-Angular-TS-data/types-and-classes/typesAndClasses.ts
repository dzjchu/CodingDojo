var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObj = { name:'Bill'};
var anythingVariable:any = "Hey";
var anythingVariable:any = 25; 
var arrayOne: boolean[] = [true, false, true, true]; 
var arrayTwo: any[] = [1, 'abc', true, 2];
var myObj1 = { x: 5, y: 10 };


// object constructor
class MyNode {
    val: number;
    constructor(val: number){
        this.val = val;
    }
    doSomethingFun(){
        let _priv = 10;
    }
}
var myNodeInstance = new MyNode(1);
console.log(myNodeInstnace.val);



function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
