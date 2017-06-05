var winChance;
var winCondition;

function slots(quarter, ideal){
    while (quarter > 0){
      quarter--;
      winCondition = Math.floor(Math.random()*99);
      if (winCondition == Math.floor(Math.random()*99)){
          winMoney = Math.floor(Math.random()*(100 - 50)) + 50;
          quarter = quarter + winMoney;
          if (quarter >= ideal){
            console.log (quarter);
          }
      } 
    }
          console.log("You lost all your money");
}

slots(50, 200);