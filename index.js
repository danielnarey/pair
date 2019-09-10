const stringify = (s) => (Array.isArray(s) ? `[${s}]` : `${s}`);

export default {
  of: (a, b) => (o) => o(a, b),
  from: (p) => ((a, b) => (o) => o(a, b))(...p),
  first: (p) => p((a) => a),
  second: (p) => p((a, b) => b),
  mapFirst: (p, f) => p((a, b) => (o) => o(f(a), b)),
  mapSecond: (p, f) => p((a, b) => (o) => o(a, f(b))),
  mapEach: (p, f1, f2) => p((a, b) => (o) => o(f1(a), f2(b))),
  mapBoth: (p, f) => p((a, b) => (o) => o(f(a), f(b))),
  reduce: (p, r, x) => p((a, b) => (x ? r(r(x, a), b) : r(a, b))),
  reduceRight: (p, r, x) => p((a, b) => (x ? r(r(x, b), a) : r(b, a))),
  reverse: (p) => p((a, b) => (o) => o(b, a)),
  toArray: (p) => p((a, b) => [a, b]),
  toString: (p) => p((a, b) => `(${stringify(a)} . ${stringify(b)})`),
};
