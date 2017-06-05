//Find the 2nd largest number in an array
function 2ndLargest(arr){
    var max = arr[0];
    var 2NDMax = [0];
    for (var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            2NDMax = max;
            max = arr[i];
        }
        if(arr[i] > 2NDMax && arr[i] < max){
            2NDMax = arr[i];
        }
    }
    return 2NDMax;
}

//Reverse an array
// math.floor in this case helps with odd length of array
function reverseArr(arr){
    var temp;
    for (var i = 0; math.floor(i < arr.length/2); i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}