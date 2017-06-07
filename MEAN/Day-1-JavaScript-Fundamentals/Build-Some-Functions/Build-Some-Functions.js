// 1
function runCheck() {
    console.log("I am running!");
}

runCheck2 = () => console.log("I am runnning too");

// 2
multiplyByTen = (num) => {result = num*10;}
multiplyByTen(5);
console.log (result);

// 3
stringReturnOne = () => string1 = 'string text 1';
stringReturnTwo = () => string2 = 'string text 2';

console.log (stringReturnOne());
console.log (stringReturnTwo());

// 4
caller = (param) => {
    if (typeof(param)=='function'){ 
        param();
    }
}

// 5
myDoubleConsoleLog = (param1,param2) => {
    if (typeof(param1) == 'function' && typeof(param2) == 'function'){ 
        console.log(param1(), param2());
    }
}

// 6
caller2 = (param) => {
    console.log('starting');
    var t = setTimeout(()=>{
        if (typeof(param) == 'function'){
            param(stringReturnOne, stringReturnTwo)
        }
    },2000);
    console.log('ending?');
    return 'interesting';
}
caller2(myDoubleConsoleLog);
