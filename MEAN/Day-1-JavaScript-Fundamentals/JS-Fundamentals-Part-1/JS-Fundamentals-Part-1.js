var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

//Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value

function printX(){
  for(var i = 0; i<x.length; i++){
    console.log(x[i]);
  }
}
printX()

//Add a new value (100) in the array x using a push method

function add100(){
    x.push(100);
}
add100()

//Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now
function addNewArr(){
    newArr = ["hello", "world", "JavaScript is Fun"];
    x.push(newArr);
}
addNewArr()

//Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum
function sumLoop(){
  var sum = 0;
  for (var i = 0; i<501; i++){
    sum = sum + i;
  }
  console.log (sum);
    
}
sumLoop()

//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
function minArr(){
    let arr = [1, 5, 90, 25, -3, 0];
    var minValue;
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] < arr[i-1]){
            minVal = arr[i];
        }
    }
    console.log (minVal)
}
minArr()

//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it

function aveArr(){
    let arr = [1, 5, 90, 25, -3, 0];
    var sumValue = 0;
    for (var i = 0; i<arr.length; i++) {
        sumValue += arr[i];
    }
    var aveValue = sumValue/arr.length;
    console.log (aveValue);
}
aveArr()