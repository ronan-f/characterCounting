function countLetters(string){
  output = {}
  trimmedString = string.replace(/\s/g, "");
  for (var i = 0; i < trimmedString.length; i ++){
    let character = trimmedString.charAt(i);
    if (output[character]) {
      output[character]++;
    } else {
      output[character] = 1
    }
  } return output;
}

console.log(countLetters('lighthouse in the house'));