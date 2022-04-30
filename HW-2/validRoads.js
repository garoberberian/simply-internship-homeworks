/*
logic: the number of trues in the first row must be equal to the number of trues in the first column and the same for other rows and cols. 

line 16: I declared 2 empty arrays, one for counting the number of true elements in a row, the other is for counting the number of true elements in a column

line 19: roadregister[0][0], roadregister[1][1]... must be false, because there cant be a road from city 0 to city 0.. etc. 

line 28: if lengths are not equal, it means the city doesn't have same number of outgoing and incoming roads, return false

line 31, 32: counts the number of trues of each row and each column independently

line 35: if number of trues of each row and column are same, return true
*/
  
function solution(roadRegister) {
    let trueRow = [], trueCol = []; 
    
    for(let i = 0; i < roadRegister.length; i++) { 
        if(roadRegister[i][i]) {
          return false;
        }

        for(let j = 0; j < roadRegister[0].length; j++) { 
            roadRegister[i][j] && trueRow.push(true);  
            roadRegister[j][i] && trueCol.push(true);  
        }
        
        if(trueRow.length !== trueCol.length) {
            return false;
        }
        trueRow = [];
        trueCol = [];
    }

    return true;
}
