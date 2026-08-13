const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const n = Number(lines[0]);
console.log(String.fromCharCode('A'.charCodeAt(0) + n - 1));

// https://paiza.jp/works/mondai/rank_test_problems_d_0002/rank_test_problems_d_0002__4
