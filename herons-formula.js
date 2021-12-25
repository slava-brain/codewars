/* 

Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
 
Output should have 2 digits precision.

*/

function heron(a, b, c) {
  let s = (a + b + c) / 2;
  return Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
}