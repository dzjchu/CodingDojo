
// Rewrite Part 1 to take in variable inputs
function sumOfXY(x,y) {
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
        sum += i;
    }
    return sum;
}

function min(arr) {
    if (arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
}

function avg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Rewrite Part 1 to anonymous functions assigned to variables
var sumOfXY = function(x, y) {
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
        sum += i;
    }
    return sum;
};

var min = function(arr) {
    if (arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
};

var ave = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

//Reweite Part 1 methods as an object

var myObj = {
    sumOfXY: function(x, y) {
        var sum = 0;
        for (var i = x; i < y + 1; i++) {
            sum += i;
        }
        return sum;
    }, //end sum
   
    min: function(arr) {
        if (arr) {
            var min = arr[0];
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            return min;
        }
    },// end min

     ave: function(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    } //end ave
}//end object

/*
This is a basic person object, declared as an object literal
  properties: name, distanceTraveled,
  methods: say_Name, say_Something, walk, run, crawl
*/

var person = {
  name : "Daniel",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : () => {
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : () =>{
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : () =>{
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  },
  showDistance : () =>{
    console.log(`${person.name} traveled ${person.distance_traveled} so far!`);
  }
  
}

person.run().walk().showDistance();
