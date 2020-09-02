const items = [1, 2, 3, 4, 5, 6];

/*
** @params {array} items - Array to be searched
** @params {number} value - Value to search for
*/
function binarySearch(items, value){
  let firstIndex = 0;
  let lastIndex = items.length - 1;
  let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

  while (items[middleIndex] != value && firstIndex < lastIndex){
    if (value < items[middleIndex]){
      lastIndex = middleIndex - 1;
    } else if (value > items[middleIndex]){
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((lastIndex + firstIndex) / 2)
  }
  return (items[middleIndex] != value) ? -1 : middleIndex;
}
