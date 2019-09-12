/**
 * ### `mapBoth(p, f) => (f(a) . f(b))`
 * Apply a single function to both values of a pair.
 */
export default (p, f) => p((a, b) => (g) => g(f(a), f(b)));
