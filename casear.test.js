import { casaer } from "./casesar";

test("Casaer cipher should shift string a specificied amount of indexes", () => {
  expect(casaer("abc", 1)).toBe("bcd");
});

test("Casaer cipher should shift string a specificied amount of indexes, with blank spaces", () => {
  expect(casaer("hi hi", 5)).toBe("mn mn");
});

test("Casaer cipher should shift string a specificied amount of indexes, with mixed case", () => {
  expect(casaer("HeLlO", 8)).toBe("pmttw");
});
