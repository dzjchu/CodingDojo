
function numbersOnly(arr) {
    for (var i=0; i<arr.length; i++){
         if (typeof arr[i] === "number"){
             newArray.push(arr[i]);
         } 
    }
}

var newArray = numbersOnly();
