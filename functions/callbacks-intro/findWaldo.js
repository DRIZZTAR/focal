
//Exercise 2 Callback arguments --- Define a function named findWaldo that takes two arguments: an array of names and a callback function
const findWaldo = function(names, found) {
  // Use the forEach method to loop through the array of names
  names.forEach((name, index) => {
    //if found element === Waldo (you've seen his stripes)
    if (name === "Waldo") {
      // If it is, call the callback function with the index of "Waldo" as an argument (should result to 2 here with waldo at 2nd index)
      found(index);   // execute callback
    }
  });
};
//actionWhenFound function takes the index of "Waldo" as an argument and logs a message to the console indicating that Waldo was found at that index! Yay
const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//AI sugestion for error handling in case waldo is not found
/*let foundWaldo = false;
names.forEach((name, index) => {
  if (name === "Waldo") {
    found(index);
    foundWaldo = true;
  }
});
if (!foundWaldo) {
  console.log("Waldo not found!");*/

/*Exercise 1
const findWaldo = function(names, found) {
  //loop through names index
  for (let i = 0; i < names.length; i++) {
    // store the found element in name
    let name = names[i];
    //if found element === Waldo
    if (name === "Waldo") {
      //return found index number
      found(i);   // execute callback
    }
  }
}
//actionWhenFound function takes the index as an argument and logs a message to the console indicating that Waldo was found at that index! Yay
const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);*/