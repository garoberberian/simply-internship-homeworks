/*
line 17: 3 empty arrays are declared, to push numbers of each row/column/matrix and immediately return false if there are two same numbers in a row/column/3by3matrix

line 18: variables a and b are declared to handle indexes of each 3by3 matrix.
for example, in first iteration, ab will be 00 01 02   10 11 12   20 21 22. indexes of first 3by3 matrix. 

lines 21-26: checking if a number exists in any of three arrays, return false 

lines 28-30: checking if an element is a number, push to its corresponding array

lines 31-32 and 35-37: logic used so that variables a, b will be correct indexes of each 3by3 matrix  

lines 34: emptying the three arrays so that for each iteration, only numbers of one row/column/3by3matrix will be pushed and checked
*/

function solution(grid) {
    let [numsOfEachRow, numsOfEachCol, numsOf3by3Matrix] = [[], [], []];
    let [a, b] = [0,0];
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid.length; j++) { 
            if(
                numsOfEachRow.includes(grid[i][j]) ||
                numsOfEachCol.includes(grid[j][i]) ||
                numsOf3by3Matrix.includes(grid[a][b])
                ) {
                return false;
            }
            !isNaN(+grid[i][j]) && numsOfEachRow.push(grid[i][j]);
            !isNaN(+grid[j][i]) && numsOfEachCol.push(grid[j][i]);
            !isNaN(+grid[a][b]) && numsOf3by3Matrix.push(grid[a][b]);  
            b++;
            j && !((j+1)%3) && ([b, a] = [b-3, a+1]);
        }
        [numsOfEachRow, numsOfEachCol, numsOf3by3Matrix] = [[], [], []];
        b += 3;
        !((i+1) % 3) &&  (b = 0);
        !((i+1) % 3) ||  (a = a === 3 ? 0 : a-3); 
      }
    return true;
  }
