// map() — Transform Every Item
// What it does: map() creates a new array by transforming each element of the original array.
// Syntax
const newArray = originalArray.map((element, index) => {
  // return transformed element
});

// 1. Simple Example: Double numbers
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// React Example: Displaying Names
const students = [
  { name: "Ezekiel", age: 23 },
  { name: "Mary", age: 22 }
];

const studentNames = students.map(student => student.name);
console.log(studentNames); // ["Ezekiel", "Mary"]

// filter() — Select Items That Match a Condition
// What it does: filter() creates a new array containing only elements that pass a test.
// Syntax
const filteredArray = originalArray.filter((element, index) => {
  return condition; // true or false
});

// 1. Simple Example: Get numbers > 50
const scores = [40, 55, 70, 30];
const passed = scores.filter(score => score >= 50);

console.log(passed); // [55, 70]

// 2. API Example: Only active users
const users = [
  { name: "Ezekiel", active: true },
  { name: "Mary", active: false }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{ name: "Ezekiel", active: true }]

// reduce() — Combine Array into One Value
// What it does: 
    // reduce() reduces an array to a single value by combining elements.
// Syntax
const result = array.reduce((accumulator, currentValue, index) => {
  // combine accumulator + currentValue
  return newAccumulator;
}, initialValue);

// 1. Sum of numbers
const numbers_2 = [10, 20, 30];
const total = numbers_2.reduce((sum, num) => sum + num, 0);

console.log(total); // 60

// 2. Total price in a shopping cart
const cart = [
  { product: "Laptop", price: 500 },
  { product: "Mouse", price: 50 },
  { product: "Keyboard", price: 100 }
];

const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
console.log(totalPrice); // 650

// 3. Grouping items by property
const students_2 = [
  { name: "Ezekiel", grade: "A" },
  { name: "Mary", grade: "B" },
  { name: "John", grade: "A" }
];

const gradeCount = students_2.reduce((acc, student) => {
  acc[student.grade] = (acc[student.grade] || 0) + 1;
  return acc;
}, {});

console.log(gradeCount); // { A: 2, B: 1 }

// Mini-Project: Student Score Analytics
// Project Goal
    // Track students & scores
    // Display:
    // Passed students
    // Average score
    // Total score
    // Top scorer

const students_data = [
  { name: "Ezekiel", score: 80 },
  { name: "Mary", score: 55 },
  { name: "John", score: 40 },
  { name: "Sarah", score: 90 }
];

// Get Passed Students_data
const passed_data = students.filter(student => student.score >= 50);
console.log("Passed Students:", passed);

// Get Names of Passed Students
const passedNames = students_data.map(student => student.name);
console.log("Passed Names:", passedNames); // ["Ezekiel", "Mary", "Sarah"]

// Total & Average Score
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;

console.log("Total Score:", totalScore);
console.log("Average Score:", averageScore);

// Top Scorer
const topScorer = students.reduce((top, student) => {
  return student.score > top.score ? student : top;
}, students[0]);

console.log("Top Scorer:", topScorer.name, topScorer.score);
