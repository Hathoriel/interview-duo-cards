import React from 'react'
import { stringUtils } from '../string/string.utils'

export const tsxUtils = {
  boldWords: (wordToDecorate: string, sentence: string): React.ReactNode => {
    if (!wordToDecorate) {
      return sentence;
    }

    const regexPattern = new RegExp(`\\b${wordToDecorate}[\\p{L}\\d'-]*\\b`, 'giu');

    let result = [];
    let lastIndex = 0;
    sentence.replace(regexPattern, (match, index) => {

      if (index > lastIndex) {
        result.push(sentence.substring(lastIndex, index));
      }
      result.push(<b>{match}</b>);
      lastIndex = index + match.length;
      return match;
    });

    if (lastIndex < sentence.length) {
      result.push(sentence.substring(lastIndex));
    }

    return <>{result}</>;
  },
  decorateWords: (wordToDecorate: string, sentence: string) => {
    const removedPrefix = stringUtils.removePrefix(wordToDecorate, ['a', 'the', 'to'])
    return tsxUtils.boldWords(removedPrefix, sentence)
  },
}