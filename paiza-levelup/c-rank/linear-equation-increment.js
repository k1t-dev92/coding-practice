const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [a, op, b, e, c] = lines[0].split(' ');

if (isNaN(Number(a))) {
  console.log(a);
} else {
  console.log(Number(a) + 1);
}

console.log(op);

if (isNaN(Number(b))) {
  console.log(b);
} else {
  console.log(Number(b) + 1);
}

console.log(e);

if (isNaN(Number(c))) {
  console.log(c);
} else {
  console.log(Number(c) + 1);
}

// https://paiza.jp/works/mondai/cd_rank_input_problems/cd_rank_input_problems__C1_step5
