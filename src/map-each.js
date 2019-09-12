/**
 * ### `mapEach(p, f1, f2) => (f1(a) . f2(b))`
 * Apply a function to the each value of a pair.
 */
export default (p, f1, f2) => p((a, b) => (g) => g(f1(a), f2(b)));
