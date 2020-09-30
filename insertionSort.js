const numbers = [99, 12, 1, 13, 1, 31, 20, 100, 32, 29, 31, 100]

function insertionSort(nums) {
  let newArr = []
  for(let i = 0; i < nums.length; i++) {
    if(i === 0 || nums[i] >= newArr[newArr.length-1]) {
      newArr.push(nums[i])
    } else if(nums[i] <= newArr[0]) {
      newArr.unshift(nums[i])
    } else {
      let length = newArr.length 
      for(let j = 1; j < length; j++) {
        if(nums[i] > newArr[j-1] && nums[i] < newArr[j]) {
          newArr.splice(j, 0, nums[i])
        } else if(nums[i] > newArr[j-1] && nums[i] === newArr[j]) { 
          newArr.splice(j, 0, nums[i])
        }
      }
    }
    // console.log(newArr)
  }
  return newArr
}

console.log(insertionSort(numbers))
