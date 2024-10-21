/*
Welcome the player 
Ask player their name
Create a player hit points variable and an npc hit points variable
Create a Enemy opponents variable
create a player barracks object
What is a peon
    Has a name, has a job (create peon function def job 'nothing')
Define peon actions

*/
const prompt = require("prompt-sync")();
let playerHP = 10;
let npcHP = 10;
const playerCastle = {
  peons: [],
}; //where our peons go after creation
let count = 0;
//the below is npc actions
const damagePlayer = () => {};
const healNPC = () => {};
//the below is player actions
const healPlayer = () => playerHP++;
const damageNPC = () => npcHP--;

const createPeon = () => {
  const thisPeon = prompt(`What would you like to name peon # ${count + 1}?`);
  console.log(`Your peon is ${thisPeon} his current job is Nothing`);
  let addPeon = { name: thisPeon, job: "no job" };
  playerCastle.peons.push(addPeon);
  count++;
  console.log(`You currently have ${playerHP} HP`);
  console.log(`Your opponent currently has ${npcHP} HP`);
  console.log(playerCastle.peons);
  playerTurn = false;
};
/*
The below function should do the following
Offer the player the ability to assign the peon the job attack or repair
After assignment check each peon role and execute appropriate action
check npc health
  if npc health = 0 display victory message
  if not 0 become npc turn
// */
const assignPeons = () => {
for(let i = 0; i<playerCastle.peons.length; i++){
  const assignRole = prompt (`What job would you like to assign ${playerCastle.peons[i].name}? Press 1 for "Attack" or 2 for "Fortify"`){
    if(assignRole === '1') {
      playerCastle.peons[i].job = 'Attack'
      damageNPC();
    } if(assignRole === '2') {
      playerCastle.peons[i].job = 'Fortify'
      healPlayer();
    }
  }
}
}








console.log(`Welcome to Castle Battle`);
console.log(
  "Castle Battle is a game in which you and an enemy npc will take turns either building up your forces, attacking each other or repairing your own castle."
);

const username = prompt("What is your name?: ");

console.log(`Welcome general ${username}`);

let playerTurn = true; //starts the game

while (playerTurn === true) {
  const playerAction = prompt(
    `What would you like to do? 1: Create a peon 2: Assign Peon Actions (Press 1 or 2): `
  );
  if (playerAction === "1") {
    createPeon();
  }
  if (playerAction === "2") {
    assignPeons();
  }

while (playerTurn === false) {
  console.log("This is a filler message");
  playerTurn = true;
}
if (count >3){
  break
}
}