import test from 'ava';
import pair from './dist/index';


test('of', (t) => {
  t.true(pair.toString(pair.of('a', 1)) === '(a . 1)');
  t.true(pair.toString(pair.of('a', 1, 'b')) === '(a . 1)');
  t.true(pair.toString(pair.of('a')) === '(a . undefined)');
  t.true(pair.toString(pair.of()) === '(undefined . undefined)');
});


test('from', (t) => {
  t.true(pair.toString(pair.from(['a', 1])) === '(a . 1)');
  t.true(pair.toString(pair.from(['a', 1, 'b'])) === '(a . 1)');
  t.true(pair.toString(pair.from(['a'])) === '(a . undefined)');
  t.true(pair.toString(pair.from([])) === '(undefined . undefined)');
  t.throws(() => pair.from());
});


test('first', (t) => {
  t.true(pair.first(pair.of('a', 1)) === 'a');
  t.true(pair.first(pair.of()) === undefined);
});


test('second', (t) => {
  t.true(pair.second(pair.of('a', 1)) === 1);
  t.true(pair.second(pair.of('a')) === undefined);
  t.true(pair.second(pair.of()) === undefined);
});


test('mapFirst', (t) => {
  t.true(pair.mapFirst(pair.of('a', 1), (s) => `${s}b`) === 'ab');
});


test('mapSecond', (t) => {
  t.true(pair.mapSecond(pair.of('a', 1), (n) => n + 1) === 2);
});


test('mapEach', (t) => {
  const mapped = pair.mapEach(pair.of('a', 1), (s) => `${s}b`, (n) => n + 1);
  
  t.true(pair.toString(mapped) === '(ab . 2)');
});


test('mapBoth', (t) => {
  const mapped = pair.mapBoth(pair.of('a', 1), (s) => `${s}b`);
  
  t.true(pair.toString(mapped) === '(ab . 1b)');
});


test('reverse', (t) => {
  const reversed = pair.reverse(pair.of('a', 1));
  
  t.true(pair.toString(reversed) === '(1 . a)');
});


test('toArray', (t) => {
  t.deepEqual(pair.toArray(pair.of('a', 1)), ['a', 1]);
  t.throws(() => pair.toArray());
});


test('toString', (t) => {
  t.true(pair.toString(pair.of('a', [])) === '(a . [])');
  t.true(pair.toString(pair.of('a', [1])) === '(a . [1])');
  t.true(pair.toString(pair.of('a', [1, 2])) === '(a . [1,2])');
  t.true(pair.toString(pair.of('a', {})) === '(a . [object Object])');
  t.throws(() => pair.toString());
});
