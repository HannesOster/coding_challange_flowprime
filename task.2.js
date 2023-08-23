//Task 2
const arrayOne = ["a", 4, 56, "q", "b", 2, 7, 77, "b", "x", 1, "h", 0, 12];
const arrayTwo = [
  8,
  2,
  54,
  "d",
  "g",
  3,
  "j",
  5,
  6,
  "t",
  7,
  8,
  "s",
  "b",
  12,
  345,
];

//Subtask 1+2
const allNumericValues = [...arrayOne, ...arrayTwo].filter(
  (item) => typeof item === "number"
);

//Subtask 3
const uniqueNumericValues = Array.from(new Set(allNumericValues));

//Subtask 4
const sum = uniqueNumericValues.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
//Subtask 5
console.log(sum);
