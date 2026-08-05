const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const q = Number(lines[0]);
const a = [];

for (let i = 0; i < q; i++) {
  const query = lines[i + 1].split(' ').map(Number);

  if (query[0] === 1) {
    a.push(query[1]);
  } else if (query[0] === 2) {
    a.shift();
  }
  console.log(a.join(' '));
}

// https://paiza.jp/works/mondai/stack_queue/stack_queue__queue_step1
