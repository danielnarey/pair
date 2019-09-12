/**
 * ### `reduceRight(p, reducer, [initial]) => result`
 * Reduce (fold) a pair from the right and return the result. Equivalent to
 * `reduce` with the order of the pair reversed.
 */
export default (p, reducer, initial) => p((a, b) => (
  (initial !== undefined && initial !== null)
    ? reducer(reducer(initial, b), a)
    : reducer(b, a)
));
