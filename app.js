const prompt = require("prompt-sync")();
const blankLine = () => console.log("");
//The below function is from coreui.io and generates an integer in the specified range
const getRandomNumber = (min, max) => {
  min = Math.ceil(min); // Round up the minimum value
  max = Math.floor(max); //Round Down the maximum Value
  return Math.floor(Math.random() * (max - min + 1)) + min; //(chatgpt fixed code so that 0,1 would work as a range)
};
//player and npc HP Totals
let playerHP = 10;
let npcHP = 10;

//player castle and peons
const playerCastle = {
  peons: [],
};

//peon count
let count = 0;

//NPC Actions
const damagePlayer = () => {
  let npcAttack = getRandomNumber(1, 5);
  playerHP = playerHP - npcAttack;
  console.log(
    `Your foe attacks your base for ${npcAttack} damage. You have ${playerHP} HP remaining.`
  );
  if (playerHP <= 0) {
    console.log(`The Enemy General has bested you in battle. Game Over! :(`);
    gameStatus = false;
  } else playerTurn = true;
};
const healNPC = () => {
  let amtHealed = getRandomNumber(1, 5);
  npcHP = npcHP + amtHealed;
  console.log(
    `The enemy General has built fortifications. They have gained ${amtHealed} HP and they now have ${npcHP} HP`
  );
  playerTurn = true;
};

//the below is player actions
const healPlayer = () => playerHP++;
const damageNPC = () => npcHP--;

//Create a peon for the player
const createPeon = () => {
  const thisPeon = prompt(`What would you like to name peon # ${count + 1}?: `);
  blankLine();
  console.log(`Your peon is ${thisPeon} his current job is Nothing`);
  blankLine();
  let addPeon = { name: thisPeon, job: "no job" };
  playerCastle.peons.push(addPeon);
  count++;
  console.log(
    `You currently have ${playerHP} HP and your for presently has ${npcHP} HP.`
  );
  playerTurn = false;
};

// Assign peons Jobs and Perform associated actions
const assignPeons = () => {
  for (let i = 0; i < playerCastle.peons.length; i++) {
    const assignRole = prompt(
      `What job would you like to assign ${playerCastle.peons[i].name}? Press 1 for "Attack" or 2 for "Fortify": `
    );
    blankLine();
    if (assignRole === "1") {
      playerCastle.peons[i].job = "Attack";
    } else if (assignRole === "2") {
      playerCastle.peons[i].job = "Fortify";
    } else {
      console.log(`Invalid Entry please input either "1" or "2". `); // how to handle invalid inputs given by chatgpt
      i--;
      continue;
    }
    if (playerCastle.peons[i].job === "Attack") {
      //updated the code so damage and healing only occcurs in npc job matches the action
      damageNPC();
    } else if (playerCastle.peons[i].job === "Fortify") {
      healPlayer();
    }
  }
  if (npcHP <= 0) {
    console.log(`You did it General ${username}, you have won!`);
    gameStatus = false; //ends the game if applicable
  } else {
    console.log(`You presently have ${playerHP} HP and your foe has ${npcHP}`);
    blankLine();
    playerTurn = false;
  }
};
//Game introduction and premise
console.log(`Welcome to Castle Battle`);
blankLine();

console.log(
  "Castle Battle is a game in which you and an enemy npc will take turns either building up your forces, attacking each other or repairing your own castle."
);
blankLine();
//Get user's name
const username = prompt("What is your name?: ");

console.log(`Welcome General ${username}`);
blankLine();
let gameStatus = true; //starts the game
let playerTurn = true; //starts player turn

//Actual game loop below
while (playerTurn === true && gameStatus === true) {
  const playerAction = prompt(
    `What would you like to do? 1: Create a peon 2: Assign Peon Actions (Press 1 or 2): `
  );
  if (playerAction === "1") {
    createPeon();
    blankLine();
  } else if (playerAction === "2") {
    assignPeons();
    blankLine();
  } else {
    console.log(`Invalid Entry please input either "1" or "2". `); // how to handle invalid inputs given by chatgpt
    continue;
  }
  // We define the npc turn below
  while (playerTurn === false && gameStatus === true) {
    const npcAction = getRandomNumber(0, 1);
    if (npcAction === 0) {
      damagePlayer();
      blankLine();
    }
    if (npcAction === 1) {
      healNPC();
      blankLine();
    }
  }
}
// This is me leaving a comment
