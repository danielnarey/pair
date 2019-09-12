/**
 * ### `reduce(p, reducer, [initial]) => result`
 * Reduce (fold) a pair from the left and return the result. The *reducer*
 * should be a function of the form `(accumulator, current) => intermediate`.
 * If specified, the *initial* value is the value of *accumulator* on the
 * first pass. If not specified, the *reducer* executes only once with the
 * first and second values of the pair as its arguments.
 */
export default (p, reducer, initial) => p((a, b) => (
  (initial !== undefined && initial !== null)
    ? reducer(reducer(initial, a), b)
    : reducer(a, b)
));
