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

  function findFactorialRecursive(num) {
    if(num === 2) {
      return 2;
    }
    return num * findFactorialRecursive(num - 1)
  }
  
  //findFactorialRecursive(10)
  // 0 1 1 2 3 5 8 13 21
  function findValueOfFibo(n) {
    let first = 0
    let second = 1
    let answer = 0
    let j = 1
    while(j !== n) {
      answer = first + second
      first = second
      second = answer
      j++
    }
    return answer
  }
  
  function findValueOfFiboRecursively(n) {
    if(n < 2) {
      return n;
    }
    return findValueOfFiboRecursively(n - 1) + findValueOfFiboRecursively(n - 2)
  }

  //DECODE WAYS MY OWN SOLUTION
  var numDecodings = function(s) {
    if (s[0] === "0" || parseInt(s) === 0) {
        return 0
    } else if (s.length <= 2) {
        if (s.length === 2 && parseInt(s) <= 26) {
            return s[1] === "0" ? 1 : 2
        } else if (s.length === 2 && parseInt(s) > 26) {
            return s.includes("0") ? 0 : 1
        } else if(s.length === 1 && s !== "0") {
            return 1
        } else {
            return 0
        }
    } else if (s.length > 2) {
        if(parseInt(s.substr(0,2)) > 26) {
            return numDecodings(s.substr(1,s.length))
        } else {
            return numDecodings(s.substr(1,s.length)) + numDecodings(s.substr(2,s.length))    
        }
    } else {
        return 0
    }
};