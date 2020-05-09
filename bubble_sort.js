/*
** @param {array} array - Array to be sorted
*/

const array = [3, 9, 2, 4, 1];

function bubbleSort(array){
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++){
      if (array[i] > array[i + 1]){
        let temp = array[i];
        array[i] = array[i + 1];
        array [i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

console.log(bubbleSort(array))
