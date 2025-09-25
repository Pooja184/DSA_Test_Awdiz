
const rotateArr = (arr) => {

  let lengthN=arr.length;
  let newArr = [];
  for (let i = 0; i < lengthN; i++) {
    let tempArr = [];
    for (let j = lengthN - 1; j >= 0; j--) {
      tempArr.push(arr[j][i]);
      // console.log(arr[j][i],"   ", i)
    }
    newArr.push(tempArr);
  }
  return newArr;

};
console.log(
  rotateArr([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);


// [[7,4,1],
//  [8,5,2],
//  [9,6,3]]