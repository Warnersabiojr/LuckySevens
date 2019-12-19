//var rollCount=;
//var highestWinnings=;
//var rollCountAtHightestWinnings=;
//


function start(){
var userInput = Number(document.getElementById("starting-bet").value);
var startingBet = userInput;
    

    if(startingBet < 0){

        document.write("Error");

    }else{

        var startingGameMoney= startingBet;

    while(startingGameMoney > 0){
        if(rollDice()==7){
            startingGameMoney = startingGameMoney + 4;
        }
        else{
            startingGameMoney = startingGameMoney - 1;
        } 
            console.log(startingGameMoney);

    }
    document.getElementById("display").innerHTML = startingBet + "</br>";
    }

}



function rollDice(){
    var roll1 = Math.floor(Math.random()*6 + 1); 
    var roll2 = Math.floor(Math.random()*6 + 1);
    var sum = roll1 + roll2;
    
    return sum;
}
    


