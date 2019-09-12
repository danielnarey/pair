/**
 * ### `mapSecond(p, f) => (a . f(b))`
 * Apply a function to the second value of a pair.
 */
export default (p, f) => p((a, b) => (g) => g(a, f(b)));
