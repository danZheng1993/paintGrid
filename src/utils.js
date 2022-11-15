export const COLORS = [
  "white",
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "magenta",
];

const generateRandomNumber = (excludeValues = []) => {
  if (excludeValues?.length > 0) {
    const idxAry = COLORS.map((_, idx) => idx).filter(
      (idx) => !excludeValues.includes(idx)
    );
    const idx = Math.floor(Math.random() * idxAry.length);
    return idxAry[idx];
  }
  return Math.floor(Math.random() * 7);
};

const getExcludingValues = (grid, i, j) => {
  const excludingValues = [];
  if (
    i >= 2 &&
    grid[i - 2]?.[j] === grid[i - 1]?.[j] &&
    grid[i - 1]?.[j] !== -1
  ) {
    excludingValues.push(grid[i - 1]?.[j]);
  }
  if (
    i + 2 < grid.length &&
    grid[i + 2]?.[j] === grid[i + 1]?.[j] &&
    grid[i + 1]?.[j] !== -1
  ) {
    excludingValues.push(grid[i + 1]?.[j]);
  }
  if (
    j >= 2 &&
    grid[i]?.[j - 1] === grid[i]?.[j - 2] &&
    grid[i]?.[j - 1] !== -1
  ) {
    excludingValues.push(grid[i]?.[j - 1]);
  }
  if (
    j + 2 < grid.length &&
    grid[i]?.[j + 1] === grid[i]?.[j + 2] &&
    grid[i]?.[j + 1] !== -1
  ) {
    excludingValues.push(grid[i]?.[j + 1]);
  }
  return excludingValues;
};

export const generateGrid = (n) => {
  const grid = new Array(n);
  for (let i = 0; i < n; i += 1) {
    grid[i] = new Array(n).fill(-1);
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const excludingValues = getExcludingValues(grid, i, j);
      const colorIdx = generateRandomNumber(excludingValues);
      let str = "";
      for (let k = i - 2; k <= i + 2; k += 1) {
        for (let l = j - 2; l <= j + 2; l += 1) {
          str = `${str} ${grid?.[k]?.[l] === undefined ? -2 : grid?.[k]?.[l]}`;
        }
        str = `${str}\n`;
      }
      grid[i][j] = colorIdx;
    }
  }
  return grid;
};
