/* 

Consider integer coordinates x, y in the Cartesian plan and three functions f, g, h defined by:

f: 1 <= x <= n, 1 <= y <= n --> f(x, y) = min(x, y)
g: 1 <= x <= n, 1 <= y <= n --> g(x, y) = max(x, y)
h: 1 <= x <= n, 1 <= y <= n --> h(x, y) = x + y
where n is a given integer (n >= 1, guaranteed) and x, y are integers.


The task is to calculate the sum of f(x, y), g(x, y) and h(x, y) for all integers x and y such that (1 <= x <= n, 1 <= y <= n).

The function sumin (sum of f) will take n as a parameter and return the sum of min(x, y) in the domain 1 <= x <= n, 1 <= y <= n.
The function sumax (sum of g) will take n as a parameter and return the sum of max(x, y) in the same domain.
The function sumsum (sum of h) will take n as a parameter and return the sum of x + y in the same domain.

*/

function sumin(n) {
  let result = 0;
  
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      result += Math.min(x, y);
    }
  }
  
  return result;
}

function sumax(n) {
  let result = 0;
  
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      result += Math.max(x, y);
    }
  }
  
  return result;
}
function sumsum(n) {
  let result = 0;
  
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      result += x + y;
    }
  }
  
  return result;
}