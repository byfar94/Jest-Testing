export function capitalize(string) {
  let firstLetter = string[0];
  let restOfWord = "";
  for (let i = 1; i < string.length; i++) {
    restOfWord += string[i];
  }
  let capFirstLetter = firstLetter.toUpperCase();
  let result = capFirstLetter + restOfWord;
  return result;
}
console.log(capitalize("hello"));
