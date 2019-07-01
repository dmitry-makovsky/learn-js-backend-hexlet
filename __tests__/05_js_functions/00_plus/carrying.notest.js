/* eslint-disable no-undef */
import concat from '../../../src/05_js_functions/00_plus/carrying';

test('compose', () => {
  expect(concat('')('')('')).toBe('');
  expect(concat('a')('bc')('f')).toBe('abcf');
});
