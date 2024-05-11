import { stringUtils } from './string.utils'
const prefixes = ['the', 'a', 'to'];

describe('StringUtils', () => {
  describe('removePrefix', () => {
    it.each([
      ['  Hello', prefixes, 'Hello'],
      ['Hello', prefixes, 'Hello'],
      ['Hello World', prefixes, 'Hello World'],
      ['the Hello', prefixes, 'Hello'],
      ['a Hello World', prefixes, 'Hello World'],
      ['to Hello World', prefixes, 'Hello World'],
      ['the World 123', prefixes, 'World 123'],
      ['a World 123 456', prefixes, 'World 123 456'],
      ['to World 123', prefixes, 'World 123'],
      ['The World', prefixes, 'World'],
      ['A World', prefixes, 'World'],
      ['To World', prefixes, 'World'],
      ['not the', prefixes, 'not the'],
      ['something else', prefixes, 'something else'],
      ['remove this', ['remove', 'this'], 'this'],
      ['ignore this', ['only', 'these'], 'ignore this'],
      ['this is a test', [], 'this is a test'],
      ['this is a test', [''], 'this is a test'],
      ['', prefixes, ''],
    ])('removePrefixBySpace(%s, %s, %s) should return %s', (input, prefixes, expected) => {
      expect(stringUtils.removePrefix(input, prefixes)).toBe(expected);
    });
  })
})