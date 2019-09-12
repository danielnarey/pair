const stringify = (s) => (Array.isArray(s) ? `[${s}]` : `${s}`);


/**
 * ### `toString(p) => '(a . b)'`
 * Returns a string representing a pair.
 */
export default (p) => p((a, b) => `(${stringify(a)} . ${stringify(b)})`);
