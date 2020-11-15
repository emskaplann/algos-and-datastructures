/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // I will iterate through the lists and I'll find out the number.
    const firstArr = []
    const secondArr = []
    
    let currentNode = l1
    while(currentNode) {
        firstArr.unshift(currentNode.val)
        currentNode = currentNode.next
    }
    const firstNum = firstArr.join("")
    
    let currentNode2 = l2
    while(currentNode2) {
        secondArr.unshift(currentNode2.val)
        currentNode2 = currentNode2.next
    }
    const secondNum = secondArr.join("")
    let totalArr = (parseInt(firstNum) + parseInt(secondNum)).toString().split("").reverse()
    
    let totalList = new ListNode(totalArr[0])
    let totalPointer = totalList
    
    for(let i = 1; i < totalArr.length; i++) {
        totalPointer.next = new ListNode(parseInt(totalArr[i]))
        totalPointer = totalPointer.next
    }
    
    return totalList;
};

// Passed 1565 test cases from 1568 test cases.