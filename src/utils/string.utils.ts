export const stringUtils = {
  decorateWord: (wordToDecorate: string, sentence: string) => {
    const removedPrefix = stringUtils.removePrefix(wordToDecorate, ['a', 'the', 'to'])
    return stringUtils.boldWord(removedPrefix, sentence)
  },
  boldWord: (wordToDecorate: string, sentence: string) => {
    if (!wordToDecorate) {
      return sentence;
    }
    const prefixRegex = new RegExp(`\\b${wordToDecorate}[\\p{L}\\d'-]*\\b`, 'giu');
    return sentence.replace(prefixRegex, `<b>$&</b>`);
  },
  removePrefix: (str: string, prefixes: string[]) => {
    const parts = str.trim().split(' ');

    const prefixPattern = new RegExp(`^(${prefixes.join('|')})$`, 'i');

    if (parts.length > 1 && prefixPattern.test(parts[0])) {
      parts.shift();
      return parts.join(' ');
    }

    return str.trim();
  },
}