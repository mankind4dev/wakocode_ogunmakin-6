// Task 1
function addNumbers(a, b) {
  return a + b;
}

const result1 = addNumbers(5, 7);
console.log("result1:", result1);

// Task 2
function calculateArea(width, height) {
  return width * height;
}

const rectangleWidth = 5;
const rectangleHeight = 10;
const area = calculateArea(rectangleWidth, rectangleHeight);
console.log(`The area of the rectangle is: ${area}`);

// Task 3
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice");
greet("Ogunmakin");

// Task 4
const numbers = [1, 2, 3, 4, 5];

function doubleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
}

doubleArray(numbers);
console.log("numbers:", numbers);
console.log(numbers[2]);

// Task 5

function sumNumbers(a, b) {
  return a + b;
}

const num1 = 5;
const num2 = "2";
const result2 = sumNumbers(num1, num2);
console.log("result2", result2);

// Task 6

function multiply(a, b) {
  return a * b;
}

const result3 = multiply(5, "2");
console.log("Result3:", result3);

//  Task 7
const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 18 },
];

// Task 8
function calculateAverageAge(studentList) {
  let totalAge = 0;

  for (let i = 0; i < studentList.length; i++) {
    totalAge += studentList[i].age;
  }

  return totalAge / studentList.length;
}

const averageAge = calculateAverageAge(students);
console.log("averageAge:", averageAge);

// Task 9
const changeName = document.getElementById("myDiv");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  changeName.innerHTML = `<h1>Autralia</h1>
  <p>I love my country, there's no place like home but I want to japa first to experience other country</p>`;
  if (myButton.classList.toggle("hide")) {
    myButton.textContent = "I Understand";
  }
});
