// Debugging challenge
 
// Function to calculate the average of an array of numbers
// Jangan ubah nama fungsinya!
function calculateAverage(numbers) {
  let sum = 0;
 
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
 
  return sum / numbers.length;
}
 
// Function to filter out even numbers from an array
// Jangan ubah nama fungsinya!
function removeEvenNumbers(numbers) {
  const filteredNumbers = [];
 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      filteredNumbers.push(numbers[i]);
    }
  }
 
  return filteredNumbers;
}
 
// Main code execution
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Original data: ${data}`);
 
const average = calculateAverage(data);
console.log(`Average: ${average}`);
 
const evenNumbers = removeEvenNumbers(data);
console.log(`Odd numbers: ${evenNumbers}`);