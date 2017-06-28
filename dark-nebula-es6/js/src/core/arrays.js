removeWithoutCopy = (arr, item) => {
  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === item) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

append = (arr, item) => {
  arr.push(item);
  return arr
};

truncate = (arr) => {
  arr.splice(-1,1);
  return arr
};

prepend = (arr, item) => {
  arr.splice(0,0,item);
  return arr
};

curtail = (arr) => {
  arr.splice(0,1);
  return arr;
};

concat = (arr1, arr2) => {
  let array = arr1.concat(arr2);
  return array

};

insert = (arr, item, index) => {

}

count = (arr, item) => {

};

duplicates = (arr) => {

};

square = (arr) => {

};

findAllOccurrences = (arr, item) => {

};
