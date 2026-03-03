// What Asynchronous Code Is
// Definition: Asynchronous code is programming logic that allows tasks to run independently without blocking the execution of other tasks. Instead of waiting for one operation to finish before starting the next, asynchronous code lets multiple operations overlap in time.

// Example
console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

console.log("End");

// Promises

// A Promise represents something that will finish later.
// It has 3 states:
//     Pending
//     Fulfilled
//     Rejected

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("It worked!");
  } else {
    reject("It failed!");
  }
});

// Using .then:
promise
  .then(result => console.log(result))
  .catch(error => console.log(error));

// async / await
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function fetchData() {
  const result = await getData();
  console.log(result);
}

fetchData();

// Fetch API
// Now we connect to real internet data.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

  async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getPosts();

// Same Example Using async/await
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getPosts();
