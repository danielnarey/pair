import _of from './of';

/*### `from([a, b]) => (a . b)`
 * Take the first two values of an array (or other iterable) and join them as a 
 * pair. 
*/
export default (p) => _of(...p);