export { charArray, casaer };

let charArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function casaer(string, shift) {
  let array = string.toLowerCase().split("");
  let indexArray = [];
  for (let i = 0; i < array.length; i++) {
    let index = charArray.indexOf(`${array[i]}`);
    indexArray.push(index);
  }
  let newCharArray = [];
  for (let i = 0; i <= indexArray.length; i++) {
    if (indexArray[i] >= 0) {
      let char = charArray[indexArray[i] + shift];
      newCharArray.push(char);
    } else if (indexArray[i] < 0) {
      let char = " ";
      newCharArray.push(char);
    }
  }
  let newWord = newCharArray.join("");
  return newWord;
}
