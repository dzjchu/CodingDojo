

funtion tellTime(){
    var hr = 8;
    var min = 50;
    var period = "am";

    if (hr <= 11 && min>30 && period==="am"){
        console.log("It's almost", hr+1, "in the morning.");
    } else if (hr <= 11 && min>30 && period==="pm"){
        console.log("It's just after", hr+1, "in the evening.");
    } else if (hr <= 11 && min<30 && period==="am"){
        console.log("It's almost", hr, "in the morning.");
    } else if (hr <= 11 && min<30 && period==="pm"){
        console.log("It's just after", hr, "in the evening.");
    } else if (hr = 12 && min>30 && period==="pm"){
        console.log("It's almost", hr-11, "in the morning.");
    } else if(hr = 12 && min<30 && period==="pm"){
        console.log("It's just after", hr, "in the morning.")
    }

}