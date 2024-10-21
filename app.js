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
const playerCastle = {};
let count = 0; 



// The below function when called should prompt the player to name their peon, add it to the playerCastle and set that peons job to nothing
const createPeon = () => {
  const namePeon = prompt(`What would you like to name peon # ${count + 1}?`);
  console.log(`Your peon is ${namePeon}`);
  };

console.log(`Welcome to Castle Battle`);
console.log(
  "Castle Battle is a game in which you and an enemy npc will take turns either building up your forces, attacking each other or repairing your own castle."
);

const username = prompt("What is your name?: ");

console.log(`Welcome general ${username}`);

const playerAction = prompt(
  `What would you like to do? 1: Create a peon 2: Assign Peon Actions (Press 1 or 2): `
);
if (playerAction === 1) {
  createPeon();
}
