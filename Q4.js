// Q4. Given a 2D board and a word, find if the word exists in the grid.

function isWordInBoard(board, word) {
  if (!board.length) {
    return false;
  }

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < board[0].length; colIndex++) {
      if (dfs(board, word, rowIndex, colIndex)) {
        return true;
      }
    }
  }
  return false;
}

function dfs(board, word, rowIndex, colIndex) {
  // No more characters to check in word, finished
  if (!word.length) {
    return true;
  }

  // Out-of-bounds, exit
  if (rowIndex < 0 || colIndex < 0 || rowIndex === board.length || colIndex === board[0].length) {
    return false;
  }

  const workingChar = board[rowIndex][colIndex];

  // If current position is not equal to word's first character, exit
  if (workingChar !== word[0]) {
    return false;
  }

  // Mark current position as visited, until following DFS sequence finishes
  board[rowIndex][colIndex] = '#';
  const isFound =
    dfs(board, word.substring(1), rowIndex - 1, colIndex) ||
    dfs(board, word.substring(1), rowIndex + 1, colIndex) ||
    dfs(board, word.substring(1), rowIndex, colIndex - 1) ||
    dfs(board, word.substring(1), rowIndex, colIndex + 1);
  board[rowIndex][colIndex] = workingChar;

  return isFound;
}

const testBoard = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

// Test #1: ABCCED

console.log(isWordInBoard(testBoard, 'ABCCED'));

// Test #2: SEE

console.log(isWordInBoard(testBoard, 'SEE'));

// Test #3: ABCB

console.log(isWordInBoard(testBoard, 'ABCB'));