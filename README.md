# @danielnarey/pair [![Build Status](https://travis-ci.com/danielnarey/pair.svg?branch=master)](https://travis-ci.com/danielnarey/pair)

**A tiny functional data structure for working with paired values**


## Example

```js
import pair from '@danielnarey/pair';
// OR: const pair = require('@danielnarey/pair');

const p = pair.of('a', 1);

typeof(p); //--> 'function'

pair.first(p);  //--> 'a'
pair.second(p); //--> 1
pair.toArray(p); //--> ['a', 1]
pair.toString(p); //--> '(a . 1)'

const q = pair.mapFirst(p, (s) => `${s}b`);
const r = pair.mapSecond(q, (n) => n + 1);

pair.toString(p); //--> '(a . 1)'
pair.toString(q); //--> '(ab . 1)'
pair.toString(r); //--> '(ab . 2)'

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

### `mapEach(p, f) => (f(a) . f(b))`
Apply a single function to both values of a pair.

### `reverse(p) => (b . a)`
Reverse the order of a pair of values, returning an interface to the reordered pair.

### `toArray(p) => [a, b]`
Returns the paired values as a length-2 array.

### `toString(p) => '(a . b)'`
Returns a string representing a pair. 
