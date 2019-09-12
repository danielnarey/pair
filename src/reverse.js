/**
 * ### `reverse(p) => (b . a)`
 * Reverse the order of a pair of values, returning an interface to the 
 * reordered pair.
 */
export default (p) => p((a, b) => (g) => g(b, a));
