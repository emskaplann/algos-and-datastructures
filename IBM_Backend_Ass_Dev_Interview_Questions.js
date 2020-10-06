// let unsorted = [7, 5, 2, 7, 8, -2, 25, 25]
// let normalSorted = []
// let meanderingArray = []

//DESCRIPTION:
// first 2 elements are the largest and smallest value in the array and goes on in the same way
// [first_largest, first_smallest, second_largest, second smallest, ...]
// input unsorted array, output meanderingArray
// [-1, 1, 2, 3, -5] => [3, -5, -1, 1]
// *Unsorted Array may contain duplicate elements.*

//My Approach:
// I would sort the array in a normal way, and then I would build the new sorted array by picking the last and first element. For sorting I'm not sure what type of algo would be optimal. I will try my best and I'll built my own or maybe insertion sort.
function meanderingArray(unsorted) {
    // Write your code here
    const normalSorted = []
    const meanderingArray = []
    
    // I'll apply a insertion sort.
        // first I'm checking if the current int is bigger than the biggest element I have in the normal sorted array, if so, I'm pushing the element to my new normalSorted Array
        
        // secondly I'm checking if the current int is smaller than my smallest element I have in the normal sorted array, if so, I'm adding the element to my new normalSorted Array as the new first element
        
        // if my current element doesn't satisfy the first two conditions then I need to iterate through my normalSorted Array to find the exact place for my current element which is in last "last" condition
    for(let i = 0; i < unsorted.length; i++) {
        if(normalSorted.length === 0) {
          normalSorted.push(unsorted[i])
        } else if(unsorted[i] > normalSorted[normalSorted.length-1]) {
            normalSorted.push(unsorted[i])
        } else if (normalSorted[0] > unsorted[i]) {
            normalSorted.unshift(unsorted[i])
        } else {
            let normalSortedLength = normalSorted.length
            for(let j = 0; j < normalSortedLength; j++) {
                if(unsorted[i] <= normalSorted[j] && unsorted[i] > normalSorted[j-1]) {
                    normalSorted.splice(j, 0, unsorted[i])
                }
            }
        }
    }
    
    let halfLengthOfTheSortedArray = Math.round(normalSorted.length / 2)
    
    for(let i = 0; i < halfLengthOfTheSortedArray; i++) {
        // so it's actually working right now, I just need to handle edge cases. It does one more unnecessary iteration when the length of the array is odd. I need to fix that now. It's basically happens because we are taking two items at one time and the length won't be even every time. So when the length is not even this iteration has to before the last one and do some actions.
        
        // so my solution was when I'm at last iteration I just push the middle item to the end of my array, if the array's length is odd. 
        
        // now I realized another problem and it's that when I have duplicate Item in the end I guess I just need to take one, i'm not sure if this what I need to do let me see :-)
        
        
        if(halfLengthOfTheSortedArray % 2 !== 0 && i === halfLengthOfTheSortedArray - 1) {
          meanderingArray.push(normalSorted[(halfLengthOfTheSortedArray % 2) + 1])
        } else {
          meanderingArray.push(normalSorted[normalSorted.length - (i+1)]) // the biggest one
          meanderingArray.push(normalSorted[i]) // the smallest one
        }
    }
    
    if(meanderingArray[meanderingArray.length - 1] === meanderingArray[meanderingArray.length - 2]) {
        meanderingArray.pop()
    }
    
    // return normalSorted => I just tested and I have a sorted array with this code now I need to translate it into Meandering Order
    
    // so my code is working only problem I think is having duplicate items. THE DESCRIPTION IS NOT CONTAINING ANY INFORMATION IF I NEED TO KEEP THEM OR DELETE SO, I'LL TRY DELETING, It didn't past the all test when I deleted duplicates. I don't know what the edge case is. I'll just submit this code.
    return meanderingArray
}

// TIME COMPLEXITY => Θ(n^2) => Insertion Sort

// I hope this solutions will help in my consideration. Thanks in advance!


// console.log(normalSorted)
// console.log(meanderingArray)


/////////////////2.nd 

// Desc: 
// k=2 & numbers [1,2,3,4]
// check if you can create subsequences with the length of K with rules of:
// 1- each element occurs in exactly. one subsequence
// 2- for each subsequence all numbers are distinct, there should be no duplicates in subsequences

// when I just read through the problem the best solution seems like using a recursive function but I'm not still sure I need draw on paper to get a good grasp

// So I think I will use a recursive for this particular problem. I'll have base case which will be either if the length of the array is zero(means return "Yes") or it's smaller than the k(means return "No")

// I tested my solution It passed 8/15 test cases. Now I'll inspect the failed test to see what's wrong.
// I realized I forgot about duplicate elements. I'll try to fix it right now.
// I'm thinking about how handle duplicates, because I need to use them even if there is duplicates. I can't just ignore them.

// I'll pass this question for now, I'll move onto the other, and I will come back if there is time.

// In order to solve this duplicate problem, I would need to seperate duplicates as far as possible. And I'm thinking on how can I do it in code.

function partitionArray(k, numbers) {
    // Write your code here
    if (numbers.length === 0) {
        return "Yes"
    } else if (numbers.length < k) {
        return "No"
    }
    
    // This solution is not scalable and it would just handle one case. that's why it's commented out
    // which means there is duplicate in the current subsequence we need to handle it
    // if(numbers.slice(1,k).includes(numbers[0])) {
    //     console.log(numbers)
    //     numbers.splice(0,1) // this is not bullet-proof I'll try to improve it
    //     numbers.push(numbers[0])
    //     if(numbers.slice(1,k).includes(numbers[0])) {
    //         return "No"
    //     }
    // }
    
    // I just found or thought another solution for the duplicate problem
    // since there is constant length and constant occurence in the array we could just check if we can give enough distance between same occurences
    // Steps to Solve this issue
    // 1- In order to do that I would have to find the occurences and their occurence time
    // 2- And then I had to check if my array has enough length for me to put duplicates all around the array so they won't interface with each other
    // 3- but still this solution wouldn't work on big datasets when there is more than multiple occurences with different numbers
    // 4- however, I'm pretty sure there is a solution for that too.

    
    return partitionArray(k, numbers.slice(k, numbers.length))
}

// I hope this solutions will help in my consideration. Thanks in advance!


// 3ND QUESTION

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }



/*
 * Complete the 'optimalPoint' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY magic
 *  2. INTEGER_ARRAY dist
 */

// desc:
// aladdin wants to travel with magic sources that has cost to travel to the next magic source, to count him successful he needs to reach the last index on magic source with source in his pocket

// and we need to start checking from the first element, question wants it like that

// example: 
// magic = [3,2,5,4] dist = [2,3,4,2]
// we would start from magic[0] which is 3, so we have 3 in the pocket and we'll go along with this until we hit the last index with magic in our pocket.

// with my first look, I think I would solve this particular with iteration. 

// my solution: 
// take each one of the magic sources as the starting point and try to reach the last index with a positive value

// So I thought I solved the problem, but I realized that I need to do a circular travel, which means If I started from 0 then it's okay to end at n-1 but if I started at 1 I need go until the first item which means 0
// now i need to adapt my code accordingly

// I tried fixing my code it passed 3/8 tests. Now I'll try to pass all of them.

// I looked at the inputs in the cases I failed. All of the inputs were containing more than 1000, 10K, 35K, 99K elements. So, my code is working on small data. I'll try to see what's missing.

// I was not expecting this challenge to take more than 2 hours. Honestly, I'm really tired right now, I'm not sure if can continue.

// And I can't see wrong part, my solution seems valid, at least it works on small data. I guess it's time complexity. And I would normally try to make it more efficient, but I'm really tired right now, I'm sorry about this. Apperantly my code can't handle edge cases according to Hackerrank. And I'm not really sure about what are edge cases for this particular problem.

function optimalPoint(magic, dist) {
    console.log(magic, dist)
    // Write your code here
    for(let i = 0; i < magic.length; i++) {
        let magicSrc = magic[i] // first source we have
        let startingPoint = i
        let pointer = i
        for(let j = 0; j < dist.length; j++) {
            if(magicSrc >= dist[i]) {
              if(pointer === dist.length) {
                pointer = 0
              }
              
              if(j === dist.length - 1 && magicSrc - dist[pointer] >= 0) {
                // console.log(magicSrc - dist[pointer])
                return startingPoint
              }
              magicSrc = magicSrc - dist[i+1] + magic[i+2]
              if(magicSrc < dist[pointer]) {
                  magicSrc = -1
              }
              pointer++ 
            } else {
              magicSrc = -1
            }
        }

        if(magicSrc >= 0) {
            return startingPoint
        }
    }
    return -1
} // TIME COMPLEXITY => O(n*2)


// optimalPoint([8,4,1,9], [10,9,3,5])
optimalPoint([2,4,5,2], [4,3,1,3])
