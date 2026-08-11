const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [h, w, y, x] = lines[0].split(' ').map(Number);

const moves = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function dfs(cy, cx, count) {
  if (count === 3) {
    console.log(cy, cx);
    return;
  }

  for (const [dy, dx] of moves) {
    const ny = cy + dy;
    const nx = cx + dx;
    if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
    dfs(ny, nx, count + 1);
  }
}

dfs(y, x, 0);
