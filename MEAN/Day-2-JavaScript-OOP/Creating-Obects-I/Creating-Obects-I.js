/* **************** Constructor ******************

public properties:
    name, wheels, passengersNumber                       
public methods:     
    makeNoise

on run: 
returns: vehicle
*****************  END *******************/


function VehicleConstructor(name, wheels, passengerNum) {
    var vehicle = {};

    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengerNum = passengerNum;

    vehicle.makeNoise = function(noise) {
        var noise = noise;
        console.log(noise);
    }

    return vehicle;
}
var Bike = VehicleConstructor("bike", 2, 0);
Bike.makeNoise = function() {
    console.log ("ring ring");
}

var Sedan = VehicleConstructor("Sedan", 4, 4);
Bike.makeNoise = function() {
    console.log ("Honk Honk");
}

var Bus = VehicleConstructor("Bus", 6, 0);
Bus.pickupPassengers = function(newPassengers){
  Bus.passengerNum += newPassengers;
}

console.log (Bike);
Bike.makeNoise();
console.log(Bus.passengerNum);
Bus.pickupPassengers(12);
console.log(Bus.passengerNum);











