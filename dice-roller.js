//Program takes a single parameter from cmd line, a number, and rolls that many six sided die

const numberOfRolls = process.argv[2];

// store the results of numberOfRolls dice in an array
const results = [];
//Loop through or rather imagine rolling a certain number of dice, numberOfRolls is received from the cmd line argument
for (let i = 0; i < numberOfRolls; i++) {
  //each time for loop runs, have a six sided dice rolled, and push the result to the results array
  const roll = Math.floor(Math.random() * 6) + 1;
  results.push(roll);
}

// Display the results using sample output 'Rolled 3 dice: 2, 6, 5', use .join to format the results in a string
console.log(`Rolled ${numberOfRolls} dice: ${results.join(', ')}`);

