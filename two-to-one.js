/* 

Description:
Take 2 strings s1 and s2 including only letters from ato z.
Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

 */



// method #1
function longest(s1, s2) {
  let result = [];
  let concatStr = s1 + s2;
  
  for (let i = 0; i < concatStr.length; i++) {
    if (result.includes(concatStr[i])) {
      continue;
    } 
    result.push(concatStr[i]);
  }
  
  result.sort(function(a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  
  return result.join("");
}

//method #2
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join("");
}