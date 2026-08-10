const a = [1, 5, 9, 7, 5, 3, 2, 5, 8, 4];

const s = new Array(a.length + 1);
s[0] = 0;
for (let i = 0; i < a.length; i++) {
  s[i + 1] = s[i] + a[i];
}

const results = [];
for (let i = 0; i <= 7; i++) {
  results.push(s[i + 3] - s[i]);
}

console.log(Math.max(...results));

// https://paiza.jp/works/mondai/prefix_sum_problems/prefix_sum_problems__sum_max_step1
