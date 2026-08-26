const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [hour] = lines[0].split(' ').map(Number);

if ((hour >= 19 && hour <= 23) || (hour >= 0 && hour < 7)) {
  console.log('breakfast');
} else if (hour >= 7 && hour < 13) {
  console.log('lunch');
} else if (hour >= 13 && hour < 19) {
  console.log('dinner');
}

// https://paiza.jp/works/mondai/rank_test_problems_d_0001/rank_test_problems_d_0001__3
