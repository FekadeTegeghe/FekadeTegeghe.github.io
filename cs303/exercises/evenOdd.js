let str = "This is a test!",
  odd = [],
  even = [];

for (let i = 0; i < str.length; i++) {
  i % 2 === 0 ? even.push(str[i]) : odd.push(str[i]);
}
console.log(odd.join(""));
console.log(even.join(""));
