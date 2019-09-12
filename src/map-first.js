/**
 * ### `mapFirst(p, f) => (f(a) . b)`
 * Apply a function to the first value of a pair, returning an interface to the
 * new pair.
 */
export default (p, f) => p((a, b) => (g) => g(f(a), b));
