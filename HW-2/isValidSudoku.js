/*
line 17: 3 empty arrays are declared, to push numbers of each row/column/matrix and immediately return false if there are two same numbers in a row/column/3by3matrix

line 18: variables subgridX and subgridY are declared to handle indexes of each 3by3 matrix.
for example, in first iteration, subgridX subgridY will be 00 01 02   10 11 12   20 21 22. indexes of first 3by3 matrix. 

lines 21-26: checking if a number exists in any of three arrays, return false 

lines 28-30: checking if an element is a number, push to its corresponding array

lines 31-32 and 35-37: logic used so that variables subgridX, subgridY will be correct indexes of each 3by3 matrix  

lines 34: emptying the three arrays so that for each iteration, only numbers of one row/column/3by3matrix will be pushed and checked
*/

function solution(grid) {
    let [numsOfEachRow, numsOfEachCol, numsOf3by3Matrix] = [[], [], []];
    let [subgridX, subgridY] = [0,0];
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) { 
            if(
                numsOfEachRow.includes(grid[i][j]) ||
                numsOfEachCol.includes(grid[j][i]) ||
                numsOf3by3Matrix.includes(grid[subgridX][subgridY])
                ) {
                return false;
            }
            !isNaN(+grid[i][j]) && numsOfEachRow.push(grid[i][j]);
            !isNaN(+grid[j][i]) && numsOfEachCol.push(grid[j][i]);
            !isNaN(+grid[subgridX][subgridY]) && numsOf3by3Matrix.push(grid[subgridX][subgridY]);  
            subgridY++;
            j % 3 === 2 && ([subgridY, subgridX] = [subgridY - 3, subgridX + 1]);
        }
        [numsOfEachRow, numsOfEachCol, numsOf3by3Matrix] = [[], [], []];
        subgridY += 3;
        i % 3 === 2 &&  (subgridY = 0);
        i % 3 === 2 ||  (subgridX = subgridX === 3 ? 0 : subgridX - 3); 
      }
    return true;
  }
