import Player from "../src/clients/players.js";
let amountOfPlayers= 1
const playerNames = []
const playerAges = []
function getAmountPlayers(){
    amountOfPlayers= prompt("How many players are playing ?")
}
while(typeof(amountOfPlayers)!=String||amountOfPlayers>4||amountOfPlayers<2){
    getAmountPlayers()
}
function getPlayers(){
    for(let i=1;i<=amountOfPlayers;i++){
        let name = prompt(`Enter The name of player ${i}`)
        let age = prompt(`Enter the age of player ${i}`)
        playerNames.push(name)
        playerAges.push(age)
    }
}

for(let index =0; index<playerNames.length;index++){
    //create players -> new Player [ name ,age ] from arrays playerName&&playerAge
}

//