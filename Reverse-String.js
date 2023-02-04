export function reverseString(string) {
  let revString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    revString += string[i];
  }
  return revString;
}
