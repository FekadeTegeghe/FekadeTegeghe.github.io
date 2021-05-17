"use strict";
function removeMiddle(list) {
  let size = list.size();
  let minPos = undefined;
  if (size % 2 === 1) {
    minPos = Math.floor(size / 2);
  } else {
    minPos = Math.floor(size / 2) - 1;
    let kThPosition = findKth(list, minPos);
    return list.remove(kThPosition);
  }
}
