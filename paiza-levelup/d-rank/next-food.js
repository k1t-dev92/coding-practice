const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const data = lines[0].split(' ').map(Number);

if ((data[0] >= 19 && data[0] <= 23) || (data[0] >= 0 && data[0] < 7)) {
  console.log('breakfast');
} else if (data[0] >= 7 && data[0] < 13) {
  console.log('lunch');
} else if (data[0] >= 13 && data[0] < 19) {
  console.log('dinner');
}

// https://paiza.jp/works/mondai/rank_test_problems_d_0001/rank_test_problems_d_0001__3
