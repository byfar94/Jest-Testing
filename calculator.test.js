import { add, subtract, multiply, divide } from "./calculator";

//add
test("add two numbers", () => {
  expect(add(2, 5)).toBe(7);
});

test("add two number, adding 0 + 0", () => {
  expect(add(0, 0)).toBe(0);
});

//substract
test("subtract two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("subtract two number, negative number answer", () => {
  expect(subtract(5, 10)).toBe(-5);
});

//multiply
test("multiply two numbers", () => {
  expect(multiply(5, 5)).toBe(25);
});

//divide
test("divide two numbers", () => {
  expect(divide(10, 2)).toBe(5);
});
