/*
** @param {array} arr - Array to be sorted
** @param {number} start - Beginning index of items to sort
** @param {number} end - Ending index of items to sort
*/
function quickSort(arr, start, end){
    if (start >= end) return;

      let index = partition(arr, start, end);
      quickSort(arr, start, index - 1);
      quickSort(arr, index + 1, end)
  }
  // Provides the privot index of which quickSort uses
  function partition(arr, start, end){
    let pivotIndex = start;
      let pivotValue = arr[end];
      for (let x = start; x < end; x++){
        if (arr[x] < pivotValue){
      swap(arr, x, pivotIndex)
              pivotIndex++;
          }
      }
      swap(arr, pivotIndex, end);
      return pivotIndex;
  }
  // Helper function to swap 2 items in an array
  function swap(arr, a, b){
    let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
  }

let arrNums = [4,9,2,8,7, 100, 3, 14, 493, 230,]
quickSort(arrNums, 0, arrNums.length - 1)
