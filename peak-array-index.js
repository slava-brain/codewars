/* 

Given an array of ints, return the index such that the sum of the elements to the right of that index
equals the sum of the elements to the left of that index.
If there is no such index, return -1. If there is more than one such index, return the left-most index.

For example:

peak [1,12,3,3,6,3,1] == Just 2
peak [10,20,30,40]  == Nothing 
The special case of an array of zeros (for instance [0,0,0,0]) will not be tested.

*/

function peak(arr){
  
  function sumElements(arr) {
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue);
  }
  
  let sumElementsLeft;
  let sumElementsRight;
  
  for (let i = 1; i < arr.length - 1; i++) {
    sumElementsLeft = sumElements(arr.slice(0, i));
    sumElementsRight = sumElements(arr.slice(i + 1));
    
    if (sumElementsLeft === sumElementsRight) {
      return i;
    }
  }
  
  return -1;
}