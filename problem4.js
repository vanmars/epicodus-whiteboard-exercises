// Algorithm
const isUniq = (string) => {                              
  if (typeof string != 'string'){
    return "Please enter a string.";
  }
  if (string.length === 1){
    return true;
  } else {
    if (string.substring(1).match(string[0])){            
      return false;
    } else {
      return  true && isUniq(string.substring(1));        
    }
  }
}

console.log(isUniq("hello"));         // false
console.log(isUniq("copyright"));     // true