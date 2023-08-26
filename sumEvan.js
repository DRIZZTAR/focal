
// Is there a better way of writing this code?

const sum = () => {
  const [num1, num2] = process.argv.slice(2);

   if (process.argv.length > 4 || typeof Number(num1) !== "number" || typeof Number(num2) !== "number") {
    console.log("Usage: node sum.js <num1> <num2>");
  } else {
    console.log(Number(num1) + Number(num2));
  }
};
sum();