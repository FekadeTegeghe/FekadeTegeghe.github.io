"use strict";
//return true if n is even, false otherwise
function isEven(n) {
  //for negative inputs
  // if (n < 0) return !isEven(n + 1);
  if (n == 0) return true;
  //for positive inputs
  let result = isEven(n - 1); //result is true when (n-1) is even... ; false when (n-1) is odd
  return !result;
}
//Number of self calls isEven(n-1), isEven(n-2), isEven(n-3), ..., isEven(1), isEven(0).
//Thus, # of self calls = n.
//T(n) = c*# of self calls
//C is the amount of work (# of primitive operations in each self call).
//The running time of isEven() recursive function is O(n)
