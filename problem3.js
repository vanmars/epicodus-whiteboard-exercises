// Without Recursion
const compressString = (string) => {
  if (typeof string != 'string'){
    return 'Please enter a string.';
  };
  let result = ""
  for (i=0; i<string.length; i++){
    // If it is the last element of the string
    if (i === string.length-1 && string[i] !== string[i-1]) {
      result = result.concat(string[i]);
    // If it is 0 or the first of a substring
    } else if (i === 0 || string[i] !== string[i-1]) {
      const index = string.substring(i+1).split("").findIndex(e => e !== string[i]);
      // If it is first of substring that ends string
      if (index === -1) {
        const subStr = string.substring(i);
        const length = subStr.length.toString();
        result = result.concat(length).concat(string[i]); 
      } else {
        const subStr = string.substring(i, i + index + 1);
        const length = subStr.length.toString();
        // Only one element within string
        if (subStr.length === 1) {
          result = result.concat(string[i]);
        } else {
          result = result.concat(length).concat(string[i]);
        }
      }
    } else {
      continue;
    };
  };
  return result;
};

// With Recursion
const compressStringRecursion = (string) => {
  // Termination Case
  if (typeof string != 'string'){
    return 'Please enter a string.';
  }
  // Base Case
  if (string.length === 1) {
    return string;
   // Else Case
  } else {
    let arr = string.split("");
    const index = arr.findIndex(e => e !== string[0]);
    if (index === -1){
      return string.length.toString().concat(string[0]);
    } else {
      const str1 = string.substring(0, index);
      const str2 = string.substring(index);
      if (str1.length === 1) {
        return str1 + compressStringRecursion(str2);
      } else {
      return str1.length.toString().concat(string[0]) + compressStringRecursion(str2);
      }
    }
  };
}

// Testing
console.log(compressString("aaabccddddaa"));
console.log(compressString("aaabccdddda"));
console.log(compressStringRecursion("aaabccddddaa"));
console.log(compressStringRecursion("aaabccdddda"));