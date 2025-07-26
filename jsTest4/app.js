const printPyramid = () => {
 

  let range = 3;
  for (let i = 1; i <= range; i++) {
    let res = "";
    for (let k = 1; k <= range - i; k++) {
      res += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      res += "*";
    }
    console.log(res);
  }
};
// printPyramid()

const squarePattern = () => {
  let range = 4;
  for (let i = 1; i <= range; i++) {
    let res = "";
    for (let j = 1; j <= range; j++) {
      if (i == 1 || i == range || j == 1 || j == range) {
        res += "* ";
      } else {
        res += "  ";
      }
    }
    console.log(res);
  }
};
// squarePattern()

const countBinary = () => {
  let binaryStr = "101010110"; // Input string
  let ones = 0;
  let zeros = 0;

  for (let char of binaryStr) {
    if (char === "1") {
      ones++;
    } else if (char === "0") {
      zeros++;
    }
  }

  console.log({ ones, zeros });
};

// countBinary();

const uniqueStr = () => {
  let arr = ["101", "101", "000", "111", "000"];
  let newArr = [...new Set(arr)];
  console.log(newArr);
};

// uniqueStr()

const printDiamond = () => {
  let range = 4;

  for (let i = 1; i <= range; i++) {
    let res = "";

    for (let s = 1; s <= range - i; s++) {
      res += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      res += "*";
    }

    console.log(res);
  }

  for (let i = range - 1; i >= 1; i--) {
    let res = "";
    for (let s = 1; s <= range - i; s++) {
      res += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      res += "*";
    }

    console.log(res);
  }
};

printDiamond();
