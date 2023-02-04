import { capitalize } from "./capitalize";

test("capitalize the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});
