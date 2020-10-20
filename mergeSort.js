// not my own solution
const numbers = [99, 44, 6, 2, 1, 5, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length
  var middleIdx = (array.length / 2)
  var left = array.slice(0, middleIdx);
  var right = array.slice(middleIdx);
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  // merge left & right
  const result = []
  let leftIdx = 0
  let rightIdx = 0
  while(leftIdx < left.length && rightIdx < right.length) {
    if(left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx])
      leftIdx++
    } else {
      result.push(right[rightIdx])
      rightIdx++
    }
     
  }
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))
}


const answer = mergeSort(numbers);
console.log(answer);