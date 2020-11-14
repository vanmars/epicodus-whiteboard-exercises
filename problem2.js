// SOLUTION WITHOUT RECURSION
const removeDuplicates = (arr) => {
  for (i=0; i<arr.length; i++) {
    while (arr.slice(i+1).includes(arr[i])){
      let subArray = arr.slice(i+1);
      const index = subArray.indexOf(arr[i]);
      arr.splice(i + index + 1, 1);
    }
  }
  return arr;
}

// Testing
console.log(removeDuplicates([7, 9, "hi", 12, "hi", 7, 53]));     // [7, 9, "hi", 12, 53]


// **********************
// SOLUTION WITH RECURSION

const removeDuplicatesWithRecursion = (arr) => {
  if (Array.isArray(arr) != true){
    return "Please enter an array.";
  }
  if (arr.length === 1){
    return arr[0];
  } else {
    const removeElementsFromSubArray = (array) => {
      let subArray = array.slice(1);
      if (!subArray.includes(array[0])){
        return array;
      } else{
      const index = subArray.indexOf(array[0]);
      array.splice(index+1, 1);
      return removeElementsFromSubArray(array);
      }
    }
    const result = removeElementsFromSubArray(arr);
    return [result[0]].concat(removeDuplicatesWithRecursion(result.slice(1)));
  }
}

// Testing
console.log(removeDuplicatesWithRecursion([7, 9, "hi", 12, "hi", 7, 53]));    // [7, 9, "hi", 12, 53]


// **********************
// SOLUTION WITH FILTER

const removeDuplicatesWithFilter = (arr) => {
  return arr.filter((el, idx) => arr.indexOf(el) === idx);
}

// Testing
console.log(removeDuplicatesWithFilter([7, 9, "hi", 12, "hi", 7, 53]));       // [7, 9, "hi", 12, 53]
