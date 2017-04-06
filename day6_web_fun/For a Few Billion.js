var money = 0.01;

for (var i=1; i<=2000; i++){
    money = money + money;
    console.log ("Day", i, "is $", money);
    if (money >= 10000 && money < 20000 ){
        console.log ("Day", i, "Just hit $10,000");
    }
    if (money >= 1000000000 && money < 2000000000){
        console.log ("Day", i, "Just hit 1 billion.");
    }
    if (money === Infinity){
        console.log ("Day", i, "This is creazy.");
        break;
    }
}

    console.log ("Finial amount is $", money);

