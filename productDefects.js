/*
 * Complete the 'largestArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY samples as parameter.
 */

// Largest Square of ONES

// Description:
// Defective => 1 & Non-Defective => 0
// Sequentially in a two-dimensional square matrix of product samples
// Goal => Determine the size of the largest square area of defectice products.

// My Approach:
// 1- Firstly, I started thinking how about ways to solve the problem. The best way I can think is, saving the possible edges and going through each layer to see if layers has the necessarry blocks which means defectice product samples

// 2- In this solution, I'll iterate through every layer except the last one. Depending on situation I might not need iterate through the quarter of the input. 

// 3- They say "Premature optimization is the root of all evil.", so I'll first try to solve it without thinking too much about the optimization.

// 4- I think I found the solution, so I'll map every defective product sample's index in respective arrays and then I'll be able to detect possible squares by finding the common elements in the arrays by comparing them with the other arrays

// 5- Sub-problems:
    // a- Firstly, I need to map the index of every defective edge for a given layer
    // b- After I have every index I need to calculate possible square by comparing the indexes I mapped into two-dimensional array
    
// 6- I coded what I thought but it's not working as expected - it takes too much time. And I can't even test my solution because of time complexity. I think the solution is valid in terms of result but it's brute forcing, so I'll think another way for solution.

// 7- I'm thinking hard right now, and every solution I can think of is brute-forcing and it will definietly not pass the tests because of the time complexity.

// 8- I thought really hard and I couldn't think any better solution at the moment. In my opinion this solution will return the correct number but It's brute-force and It's not even close to word "efficient"... I leave this question for now, hopefully I'll come up with a better solution, I'm 100% sure there is another way for this problem.

// ***********IMPORTANT***********
// 9- To be honest, I researched about the problem and found the optimal solution for the problem. Apparently I need to use "Dynamic Programming". I couldn't think this by myself, I could only think the brute-force solution. If this is a reason to disqualify, I'm okay with it. Unfortunately, I never solved a similar problem and I didn't know how to solve it efficiently, however like I said I coded the brute-force solution and you can find the brute-force solution below the function on the 122th line. I believe the important thing is thought process besides solving the question. I hope I'm able to showcase my thought process to you.

// 10- Right now, I'll code the optimal solution for this specific problem. I'm not copy-pasting the solution, I found the solution in pseudo-code. And I understood how it works, to be clear I'll write down the steps for the optimal solution with Dynamic Programming.

// Optimal Solution Steps(Dynamic Programming):
// 1- First we need to create an copy of our matrix.
// 2- Initial step is copying the first row and first column exaclty same from the input.
// 3- For other values in the original matrix we'll follow a formula. This formula will find out the largest possible square's one edge, by checking it neighbors.

// Explaining how the formula works:
// oldMatrix & newMatrix | r => row & c => column
// FORMULA => If oldMatrix[r][c] == 1 then newMatrix[r][c] = Minimum of (oldMatrix[r][c-1], oldMatrix[r-1][c], oldMatrix[r-1][c-1]) + 1 || Else(oldMatrix[r][c] == 0) then newMatrix[r][c] = 0
// EXAMPLE OF THE FORMULA
// oldMatrix[r][c] => 1
// newMatrix[r][c] => undefined which in the visual example it's "*"
// oldMatrix[r][c-1] => 1
// oldMatrix[r-1][c] => 0
// oldMatrix[r-1][c-1] => 1
// According to the formula the value on the new matrix will be "1"
// 1 0 1      1 0 1      1 0 1     1 0 1
// 1 1 0  =>  1      =>  1 *   =>  1 1
// 1 1 0      1          1         1

// SECOND EXAMPLE OF THE FORMULA
// oldMatrix[r][c] => 1
// newMatrix[r][c] => undefined which in the visual example it's "*"
// oldMatrix[r][c-1] => 1
// oldMatrix[r-1][c] => 1
// oldMatrix[r-1][c-1] => 1
// According to the formula the value on the new matrix will be "2" because every neighbor we check is equal to one and the minimum value is "1" naturally, so in the formula we add "1" to the minimum which ends up being "2" => newMatrix[r][c] = 2
// After getting through this step we can finally see where we find the largest square with area of (2*2)=4
// 1 0 1      1 0 1      1 0 1      1 0 1
// 1 1 0  =>  1 1 0  =>  1 1 0  =>  1 1 0
// 1 1 0      1          1 *        1 2

// 4- If we continue to our solution, after creating the new matrix, we just need to find the biggest value in the matrix, which we can flat the arrays and then find the maximum from it

// 5- Now I'll code the solution. Thanks for sticking with me!

// 6- I coded the optimal solution and it works quite well. I just want to indicate again that I didn't come up with this solution. I researched the problem and I saw a pseudo-code that explains the solution. From there I was able understand the solution and I was able to code it. However, I coded my own solution but the problem is that my solution is BRUTE-FORCE and It's really slow. Nonetheless, you can see my BRUTE-FORCE solution in the line 122 ^_^

//  *-* THIS IS THE OPTIMAL SOLUTION FOR THE QUESTION *-*
function largestArea(samples) {
     // Write your code here
    const oldMatrix = samples
    const newMatrix = Object.assign([], samples); // copying the oldMatrix
    var answer = 0
    for(let row = 1; row < newMatrix.length; row++) { // row is equal to one because we need to leave the first row as it is
        for(let col = 1; col < newMatrix[row].length; col++) { // col is equal to one because we need to leave the first column as it is and in this iteration first item of every row is being the first column
            if(oldMatrix[row][col] === 0) {
                newMatrix[row][col] = 0
            } else if(oldMatrix[row][col] === 1) {
                // This is the formula I was talking about you can see it in code right here
                newMatrix[row][col] = Math.min(oldMatrix[row][col-1], oldMatrix[row-1][col], oldMatrix[row-1][col-1]) + 1
                if(newMatrix[row][col] > answer) answer = newMatrix[row][col]
            }
        }   
    }
    // console.log(newMatrix) | In this step I have the newMatrix as expected
    // Now I just need to find the maximum value from here => Instead doing iterations again I decided to track the maxiumum with every iteration so that I don't need to do it again
    return answer
}

// *-* THIS IS THE BRUTE-FORCE SOLUTION *-* My own solution for the problem.
function largestAreaBruteForce(samples) {
     // Write your code here
    const indexesOfTheEachDefectiveSample = []
    
    for(let i = 0; i < samples.length; i++) {
        const arrayOfIndexes = []
        for(let j = 0; j < samples[i].length; j++) {
            if(samples[i][j] === 1) arrayOfIndexes.push(j)
        }
        indexesOfTheEachDefectiveSample.push(arrayOfIndexes)
    }
    
    // in this step we have all the indexes of the defective samples now we need to calculate the possible squares in order to find the largest one
    const areaOfThePossibleSquares = []
    for(let i = 0; i < indexesOfTheEachDefectiveSample.length; i++) {
        
        var j = i + 1
        var sizeOfTheBiggestAreaForCurrentLayer = 0
        var lengthOfTheCurrentSquare = 1
        while(j) {
            if(indexesOfTheEachDefectiveSample[j]) {
                // find common elements in two given array
                const commonIndexes = indexesOfTheEachDefectiveSample[i].filter(function(n) {
                    return indexesOfTheEachDefectiveSample[j].indexOf(n) !== -1
                })
                lengthOfTheCurrentSquare++
                
                // Now I need to find out if there is a square so far
                let counter = 1
                for(let k = 0; k < commonIndexes.length; k++) {
                    if(Math.abs(commonIndexes[k+1] - commonIndexes[k]) === 1) {
                        counter++
                    } else {
                        counter = 1
                    }
                    if(counter === lengthOfTheCurrentSquare) {
                        if(counter > sizeOfTheBiggestAreaForCurrentLayer) {
                            sizeOfTheBiggestAreaForCurrentLayer = counter
                        }
                    }
                }
            } else {
                j = null
            }
        }
        areaOfThePossibleSquares.push(sizeOfTheBiggestAreaForCurrentLayer)
        console.log(areaOfThePossibleSquares)
    }
    return Math.max(...areaOfThePossibleSquares)
}