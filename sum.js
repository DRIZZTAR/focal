const args = process.argv.slice(2);

function sum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.error('Please provide two valid numbers.');
    return;
  }

  const total = Number(num1) + Number(num2);
  return total;
}

if (args.length === 2) {
  const num1 = Number(args[0]);
  const num2 = Number(args[1]);
  const result = sum(num1, num2);
  if (!isNaN(result)) {
    console.log(result);
  }
} else {
  console.error('Please provide exactly two numbers.');
}