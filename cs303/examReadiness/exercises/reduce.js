let str = "This is a test!";

const [even, odd] = [...str].reduce((r, char, i) => (r[i % 2].push(char), r), [
  [],
  [],
]);

console.log(odd.join(""));
console.log(even.join(""));
