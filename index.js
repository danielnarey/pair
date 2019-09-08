const pair = (a, b) => (o) => o(a, b);

const first = (p) => p((a, b) => a);

const second = (p) => p((a, b) => b);

const mapFirst = (p, f) => p((a, b) => (o) => o(f(a), b));

const mapSecond = (p, f) => p((a, b) => (o) => o(a, f(b)));

const mapBoth = (p, f) => p((a, b) => (o) => o(f(a), f(b)));

const toArray = (p) => p((a, b) => [a, b]);



const list = (...ls) => (o) => o(...ls);

const cons = (h, ls) => ls((...t) => (o) => o(h, ...t));

const head = (p) => p((h) => h);

const tail = (p) => p((h, ...t) => (o) => o(...t));

const toArray = (p) => p((...ls) => ls);