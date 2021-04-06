function countSub(str, tar) {
  let start = str.substring(str.indexOf(tar, 0));
  if (!str.includes(tar)) {
    return 0;
  } else {
    return 1 + countSub(start.substring(tar.length), tar);
  }
}
let txt = "abcdefabcghiabcjkldefbhbhdef";
let tar = "def";
console.log(countSub(txt, tar));
