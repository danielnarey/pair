/* ### `of(a, b) => (a . b)`
 * Join two arbitrary values *a* and *b* as a pair, returning a functional
 * interface to the paired values (denoted as `(a . b)`).
*/
export default (a, b) => (f) => f(a, b);
