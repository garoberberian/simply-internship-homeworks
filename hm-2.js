const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ];
  
const matrix2 = [
    [1, 2, 3],
    [4, 5, []],
    [7, 8, 9],
    [null, 11, 12],
    [13, 14, NaN],
  ];
  
const calculateRotationNumber = deg => {
    if (deg % 90 !== 0) {
        alert(deg)
        throw new RangeError('Incorrect value')
    } 
    return ((deg % 360) + 360) % 360 / 90 
  }
  
const rotate90degree = matr => {
    const newmatr = [];
    const l = matr.length;
      
    matr[0].forEach((el, i) => {
        let arr = [];
        matr.forEach((el, j) => {
            arr.push(matr[l - j - 1][i]);            
        })
        newmatr.push(arr);
    })
      
      return newmatr;
  }
  
  //1.
const rotate = (matrix, deg) => {
  const r = calculateRotationNumber(deg);
  return Array.from({length: r}).reduce(a => rotate90degree(a), matrix)
};
  
const rotate90degreeWithoutDiagonal = matr => {
    const newmatr = [];
    const l = matr.length;
      
    matr[0].forEach((el, i) => {
        let arr = [];
        matr.forEach((el, j) => {
            if(i === j || j === matr[0].length - i - 1) {
                arr.push(matr[i][j])
            } else {
                arr.push(matr[l - j - 1][i]);                            
            }
        })
        newmatr.push(arr);
    })
      
    return newmatr;
 }

// 2. Rotate all matrix elements except the diagonals
const rotateWithoutDiagonal = (matrix, deg) => {
    const r = calculateRotationNumber(deg);
    return Array.from({length: r}).reduce(a => rotate90degreeWithoutDiagonal(a), matrix)
};

