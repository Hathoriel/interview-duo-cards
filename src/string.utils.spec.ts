import { stringUtils } from './string.utils'

describe('StringUtils', () => {
  it.each([
    ['  Hello', 'Hello'],
    ['Hello', 'Hello'],
    ['Hello World', 'World'],
    ['Hello World 123', 'World 123'],
    ['Hello World 123 456', 'World 123 456'],
  ])('removePrefixBySpace', (input, expected) => {
    expect(stringUtils.removePrefixBySpace(input)).toBe(expected);
  });

})

// just to avoid TS error
export {}