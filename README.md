# @danielnarey/pair

**[Deprecated] A tiny functional data structure for pairs of arbitrary values**

> **Deprecation Warning**: *This experimental library is no longer in active development and will not be updated in response to Node.js version  releases or security vulnerabilities identified in the dependency tree.*

When you have two values that you want to join with the same reference or return from a function, using a **pair** gives you immutability, along with a clean functional pattern for updating one or both values to a new reference.


## Examples

```js
import pair from '@danielnarey/pair';
// OR: const pair = require('@danielnarey/pair');

// constructor
const p = pair.of('🍐', 42);
typeof(p); //--> 'function'

// accessors
pair.first(p);  //--> '🍐'
pair.second(p); //--> 42

// conversion
pair.toArray(p); //--> ['🍐', 42]
pair.toString(p); //--> '(🍐 . 42)'

// functional transforms
const q = pair.mapFirst(p, (s) => `${s}🍎`);
const r = pair.mapSecond(q, (n) => n + 1);

// immutability
pair.toString(p); //--> '(🍐 . 42)'
pair.toString(q); //--> '(🍐🍎 . 42)'
pair.toString(r); //--> '(🍐🍎 . 43)'

```

## API

### `of(a, b) => (a . b)`
Join two arbitrary values *a* and *b* as a pair, returning a functional interface to the paired values (denoted as `(a . b)`).

### `from([a, b]) => (a . b)`
Take the first two values of an array (or other iterable) and join them as a pair.

### `first(p) => a`
Returns the first value of a pair.

### `second(p) => b`
Returns the second value of a pair.

### `mapFirst(p, f) => (f(a) . b)`
Apply a function to the first value of a pair, returning an interface to the new pair.

### `mapSecond(p, f) => (a . f(b))`
Apply a function to the second value of a pair.

### `mapEach(p, f1, f2) => (f1(a) . f2(b))`
Apply a function to the each value of a pair.

### `mapBoth(p, f) => (f(a) . f(b))`
Apply a single function to both values of a pair.

### `reduce(p, reducer, [initial]) => result`
Reduce (fold) a pair from the left and return the result. The *reducer* should be a function of the form `(accumulator, current) => intermediate`. If specified, the *initial* value is the value of *accumulator* on the first pass. If not specified, the *reducer* executes only once with the first and second values of the pair as its arguments.

### `reduceRight(p, reducer, [initial]) => result`
Reduce (fold) a pair from the right and return the result. Equivalent to `reduce` with the order of the pair reversed.

### `reverse(p) => (b . a)`
Reverse the order of a pair of values, returning an interface to the reordered pair.

### `toArray(p) => [a, b]`
Returns the paired values as a length-2 array.

### `toString(p) => '(a . b)'`
Returns a string representing a pair.


## Prior Art
- Lisp: [cons](https://en.m.wikipedia.org/wiki/Cons)
- Racket/base: [pair](https://docs.racket-lang.org/reference/pairs.html)
- Racket/rebellion: [pair](https://docs.racket-lang.org/rebellion/Pairs.html)
- Haskell/base: [Data.Tuple](https://hackage.haskell.org/package/base-4.12.0.0/docs/Data-Tuple.html)
- Elm/core: [Tuple](https://package.elm-lang.org/packages/elm/core/latest/Tuple)
