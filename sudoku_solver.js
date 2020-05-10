let board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

/*
** @param {2D array} board - Sudoku board to be solved
** @return {2D array} board - Solved board
*/
const solveSudoku = function(board) {
    /*
    ** @param {number} y - Y coordinate board location
    ** @param {number} x - X coordinate board location
    ** @param{number} n - Value to be checked if it can exist in the [y][x] board space
    ** @return {boolean}
    */
    function check(y, x, n){
        // Search column for n
        for (let i = 0; i < 9; i++){
            if (board[y][i] == n) return false;
        }
        // Search row for n
        for (let i = 0; i < 9; i++){
            if (board[i][x] == n) return false;
        }

        const row = Math.floor(x / 3) * 3;
        const col = Math.floor(y / 3) * 3;

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[col+i][row+j] == n) return false;
            }
        }
        return true;
    }

    for (let y = 0; y < 9; y++){
        for (let x = 0; x < 9; x++){
            if (board[y][x] === "."){
                for (let n = 1; n < 10; n++){
                    if(check(y, x, n)){
                        board[y][x] = n.toString();
                        solveSudoku(board);
                        board[y][x] = ".";
                    }
                }
                return;
            }
        }
    }
    return board
}
