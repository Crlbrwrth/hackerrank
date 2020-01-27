function cavityMap(grid) {
  grid = grid.map(e => e.split('').map(f => Number(f)))
  grid = grid.map((row, i) => {
    return row.map((field, j) => {
      if (i !== 0 && j !== 0 && i !== grid.length - 1 && i !== grid.length + 1) {
        return field > Math.max(grid[i + 1][j], grid[i - 1][j], grid[i][j - 1], grid[i][j + 1]) ? 'X' : field
      }
      return field

    })
  })
  grid = grid.map(e => e.map(f => String(f)).join(''))
  return grid
}