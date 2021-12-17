/* Description:
The Stanton measure of an array is computed as follows: count the number of 1s in the array. Let this count be n.
The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Example
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times. */

function stantonMeasure (array) {
  let countsOne = array.filter( el => el === 1).length;
  let countsStanton = array.filter( el => el === countsOne).length;
  return countsStanton;
}