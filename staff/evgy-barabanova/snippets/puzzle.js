let puzzle = [
  ["a", "k", "f", "o", "x", "e", "s"],
  ["s", "o", "a", "w", "a", "h", "p"],
  ["i", "t", "c", "k", "e", "t", "n"],
  ["o", "t", "s", "d", "h", "o", "h"],
  ["s", "e", "x", "g", "s", "t", "a"],
  ["u", "r", "p", "i", "w", "e", "u"],
  ["z", "s", "b", "n", "u", "i", "r"]
]

function printHorizontalLines(puzzle) {
    for (let i = 0; i < puzzle.length; i++) {
        const row = puzzle[i]

        console.log(row.join(''))   
    }
}

//printHorizontalLines(puzzle)

function printVerticalLines(puzzle) {
    for (let i = 0; i < puzzle[0].length; i++) {
        const column = []

        for (let j = 0; j < puzzle.length; j++) {
            const row = puzzle[j]

            const char = row[i]

            column.push(char)
        }

        console.log(column.join(''))
    }
}

//printVerticalLines(puzzle)

function printDiagonalBottomLeftTopRightLines(puzzle) { // -> /
  for(let i=0; i<puzzle.length; i++){
      const chars = []

      let k = 0

      for (let j = i; j >= 0; j--, k++) {
          const char = puzzle[j][k]

          chars.push(char)
      }

      console.log(chars.join(''))
  }


  for (let i = 1; i < puzzle[0].length; i++) {
      const chars = []

      for(let x = i, y = 6; x < puzzle[0].length; x++, y--) {
          const char = puzzle[y][x]

          chars.push(char)
      }

      console.log(chars.join(''))
  }
}

printDiagonalBottomLeftTopRightLines(puzzle)

function printDiagonaTopLeftBottomRightLines(puzzle) { // -> \
    // TODO implement me (by evgy ******)

    
}

//printDiagonaTopLeftBottomRightLines(puzzle)
