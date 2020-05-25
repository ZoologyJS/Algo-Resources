/*
** @param {array} arr - Array to be sorted
*/
const arr = [20,12,1,4,3,9,7,6, 18];
function mergeSortTopDown(arr){
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

/*
** @param {array} left - Left section of array
** @param {array} right - Right section of array
*/
function mergeTopDown(left, right){
  console.log("input: " + left + " & " + right)
  const arr = new Array();

  while (left.length && right.length){
    if (left[0] < right[0]){
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  console.log("output:" + arr.concat(left.slice()).concat(right.slice()))
  return arr.concat(left.slice()).concat(right.slice())
}
