import test from 'ava';
import pair from './dist/index';


test('of', (t) => {
  t.true(pair.toString(pair.of('a', 1)) === '(a . 1)');
  t.true(pair.toString(pair.of('a', 1, 'b')) === '(a . 1)');
  t.true(pair.toString(pair.of('a')) === '(a . undefined)');
  t.true(pair.toString(pair.of()) === '(undefined . undefined)');
});
