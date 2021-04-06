const movies = [
  {
    title: "Amadeus",
    score: 90,
  },
  {
    title: "Stand By Me",
    score: "85,",
  },
  {
    title: "Parasite",
    score: 90,
  },
  {
    title: "Alien",
    score: 90,
  },
];
const titles = movies.map(function (movie) {
  return movie.title;
  //r
});

console.log(titles);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = nums.filter((n) => {
  return n % 2 === 0;
});
console.log(even);
