const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const q = Number(lines[0]);
const queues = [[], []];

for (let i = 0; i < q; i++) {
  const [type, k, x] = lines[i + 1].split(' ').map(Number);
  const idx = k - 1;

  if (type === 1) {
    queues[idx].push(x);
  } else if (type === 2) {
    const first = queues[idx].shift();
    console.log(first);
  } else if (type === 3) {
    console.log(`${queues[0].length} ${queues[1].length}`);
  }
}

// https://paiza.jp/works/mondai/stack_queue/stack_queue__practice_step1
