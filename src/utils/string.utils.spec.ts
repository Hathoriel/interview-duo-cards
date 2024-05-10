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

  describe('boldWord', () => {
    it.each([
      ['Hello', 'Hello', '<b>Hello</b>'],
      ['Hello', 'Hello world', '<b>Hello</b> world'],
      ['hello', 'Hello world', '<b>Hello</b> world'],
      ['front', 'Front-end developer', '<b>Front-end</b> developer'],
      ['front', 'This is a front-line approach', 'This is a <b>front-line</b> approach'],
      ['front', 'No word starts with front in this sentence', 'No word starts with <b>front</b> in this sentence'],
      ['front', 'This is not a frontoffice but a front office', 'This is not a <b>frontoffice</b> but a <b>front</b> office'],
      ['notfound', 'Nothing to highlight here', 'Nothing to highlight here'],
      ['niño', 'El niño está jugando', 'El <b>niño</b> está jugando'],
      ['co-op', 'The co-op is thriving', 'The <b>co-op</b> is thriving'],
      ['O\'Connor', 'O\'Connor is a common surname', '<b>O\'Connor</b> is a common surname'],
      ['', 'This is a sentence', 'This is a sentence'],
      ['replace', '', ''],
      ['', '', ''],
      ['r', 'rrr', '<b>rrr</b>'],
      ['r', 'r r r', '<b>r</b> <b>r</b> <b>r</b>'],
      ['r', 'rrr rr r', '<b>rrr</b> <b>rr</b> <b>r</b>'],
    ])('boldWord(%s, %s) should return %s', (wordToDecorate, sentence, expected) => {
      expect(stringUtils.boldWord(wordToDecorate, sentence)).toBe(expected);
    });
  })

  describe('decorateWord', () => {
    it.each([
      ['Hello', 'Hello', '<b>Hello</b>'],
      ['To vex', 'What vex you the most', 'What <b>vex</b> you the most'],
      ['commence', 'his design team commenced work', 'his design team <b>commenced</b> work'],
      ['tripe', 'Tripe is a type of edible offal from the stomachs of various domestic animals.', '<b>Tripe</b> is a type of edible offal from the stomachs of various domestic animals.'],
      ['Drain', 'we drained the swimming pool', 'we <b>drained</b> the swimming pool'],
      ['the acumen', 'business acumen', 'business <b>acumen</b>'],
      ['contingency plan', '', ''],
    ])('decorateWord(%s, %s) should return %s', (wordToDecorate, sentence, expected) => {
      expect(stringUtils.decorateWord(wordToDecorate, sentence)).toBe(expected);
    });
  })

})

// just to avoid TS error
export {}