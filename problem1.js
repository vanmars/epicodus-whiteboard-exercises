// **********************
// SOLUTION WIHTOUT RECURSION

const getUrl = (string) => {
  // Check that string is in fact string
  if (typeof string != 'string') {
    return "Please enter a string.";
  }
  // Split string into array on the space
  const arr = string.split(" ");
  // Return arr joined with %20
  return arr.join("%20");
};

// Testing
console.log(getUrl("Jasmine Ann Jones")); // "Jasmine%20Ann%20Jones"



//**********************
// SOLUTION WITH RECURSION

const getUrlRecursion = (string) => {
  // Termination Case
  if (typeof string != 'string') {
    return "Please enter a string.";
  }
  // Split string into array
  const arr = string.split(" ");
  // Base Case: If array has a length of one, return arr[0]
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0].concat("%20").concat(getUrlRecursion(arr.slice(1).join(" ")));
  }
}

// Testing
console.log(getUrlRecursion("Jasmine Ann Jones")); // "Jasmine%20Ann%20Jones"