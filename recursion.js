function reverseStrWithIteration(str) {
    let newStr = []
    for(let i = str.length - 1; i >= 0; i--) {
      newStr.push(str[i])
    } 
    return newStr.join('')
  }
  
  //not my solution - still struggling with recursion
  function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }
  
  reverseStringRecursive('yoyo master');