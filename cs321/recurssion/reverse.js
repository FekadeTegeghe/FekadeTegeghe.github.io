"use strict";
function reverse(str) {
  if (str.length === 0) {
    return "";
  } else {
    return reverse(str.substring(1) + str.charAt(0));
  }
}
//Time complexity of the above one is Big-O(n^2)
// function recursiveFun5(int n)
// {
//     for (i = 0; i < n; i += 2) {
//         // do something
//     }
//     if (n <= 0)
//         return 1;
//     else
//         return 1 + recursiveFun5(n-5);
// }
// And here the for loop takes n/2 since we're increasing by 2,
//and the recursion takes n/5 and since the for loop is called recursively,
//therefore, the time complexity is in
// (n/5) * (n/2) = n^2/10,
// due to Asymptotic behavior and worst-case scenario considerations or
//the upper bound that big O is striving for, we are only interested in the
//largest term so O(n^2).

//reverse the characters from str[i] to end
function reverse(str) {
  return _reverse(str, 0);
}

function _reverse(str, i) {
  if (i === str.length) {
    return "";
  } else {
    return _reverse(str, i + 1) + str.charAt(i);
  }
}
console.log(reverse("abc"));
//The running time if reverse() function is O(2n)= O(n).
//T(n) is the amount of work on each self-call'
//self calls are: _rev(str, 0), _rev(str, 1), ..., _rev(str, n = str.length)
