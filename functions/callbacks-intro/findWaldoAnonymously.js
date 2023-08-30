const findWaldo = function(names, found) {
  //this will help error handling if Waldo is not found
  let foundWaldo = false;
  //loop through each element and index of the parameter names
  names.forEach((name, index) => {
    //if element === waldo
    if (name === "Waldo") {
      //return index of element Waldo and change foundWaldo to true
      found(index);
      foundWaldo = true;
    }console.debug(object);
  });
  //if foundWaldo remains false and is not found
  if (!foundWaldo) {
    console.log("\u{1F534}\u{1F534}\u{1F534}Waldo not found!\u{1F534}\u{1F534}\u{1F534}");
  }
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("\u{1F483}\u{1F483}\u{1F483}Waldo is located at:", index + "\u{1F483}\u{1F483}\u{1F483}");
});
//Not dound tests
findWaldo(["Alice", "Bob", "Wario", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});