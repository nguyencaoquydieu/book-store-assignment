export function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 5],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < lines.length; index++) {
    const [x, y, z] = lines[index];
    if (cells[x] && cells[x] == cells[y] && cells[x] == cells[z]) {
      return cells[x];
    }
  }
  return null;
}
