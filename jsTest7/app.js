const rotationByK = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let tempArr = new Array(arr.length);
  let num = 3;
  num = num % arr.length;
  for (let i = 0; i < arr.length; i++) {
    tempArr[(i + num) % arr.length] = arr[i];
  }
  console.log(tempArr);
};
rotationByK();

const groupAnagrams = () => {
  let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

  let obj = {};

  for (let word of arr) {
    let key = word.split("").sort().join("");

    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(word);
  }
  let result = Object.values(obj);
  console.log(result);
};

groupAnagrams();
