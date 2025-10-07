// Simple function to greet a user
function greetUser(name) {
    return `Hello, ${name}! Welcome to our application.`;
}

// Example usage
const userName = "John";
console.log(greetUser(userName));

// Basic array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);
console.log("Sum:", sum);
