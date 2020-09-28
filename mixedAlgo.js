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
  
  // findValueOfFibo(8)
  // findValueOfFiboRecursively(10)
  
  
  
  // function replaceChar(str, i) {
  //   return str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1)
  // }
  
  // function capitalizeEachWord(str) {
  //   // str = "my name is aibek"
  //   for(let i = 0; i < str.length; i++) {
  //     debugger;
  //     if(str[i - 1] === undefined || str[i - 1] === " ") {
  //       str[i] = replaceChar(str, i)
  //     }
  //   }
  //   return str
  // }
  
  // O(A+B)
  // O(N)
  
  function capitalizeEachWord(str) {
    splittedStr = str.split(' ')
    for(let i = 0; i < splittedStr.length; i++) {
      splittedWord = splittedStr[i].split('')
      splittedWord[0] = splittedWord[0].toUpperCase()
      splittedStr[i] = splittedWord.join('')
    }
    // console.log(splittedStr)
    return splittedStr.join(' ')
  }
  
  // capitalizeEachWord("my name is aibek")
  
  // for(let i =0; i < A.LENGTH; I++) {} 
  // O(A+B)
  // for(let i =0; i < B.LENGTH; I++) {}
  
  
  function decodeNumbers(numbers) {
    if(numbers.length <= 2) {
      if(numbers.length === 2 && parseInt(numbers) <= 26) {
        return 2
      } else if(numbers.length === 2 && parseInt(numbers) > 26) {
        return 1
      } else if(numbers.length === 1) {
        return 1
      } else {
        return 0
      }
    } else if(numbers.length > 2) {
      if(parseInt(numbers.substr(0,2)) > 26) {
        return decodeNumbers(s.substr(1,numbers.length))
      } else {
        return decodeNumbers(numbers.substr(1,numbers.length)) + decodeNumbers(numbers.substr(2,numbers.length)) 
      }
    }
  }
  