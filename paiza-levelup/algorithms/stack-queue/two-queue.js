const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const q = Number(lines[0]);
const queues = [[], []];

for (let i = 0; i < q; i++) {
  const [type, k, x] = lines[i + 1].split(' ');
  const t = Number(type);

  if (t === 1) {
    const idx = Number(k) - 1;
    queues[idx].push(x);
  } else if (t === 2) {
    const idx = Number(k) - 1;
    const last = queues[idx].shift();
    console.log(last);
  } else if (t === 3) {
    console.log(`${queues[0].length} ${queues[1].length}`);
  }
}

// https://paiza.jp/works/mondai/stack_queue/stack_queue__practice_step1
