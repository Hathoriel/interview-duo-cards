export const stringUtils = {
  removePrefix: (str: string, prefixes: string[]) => {
    const parts = str.trim().split(' ');

    const prefixPattern = new RegExp(`^(${prefixes.join('|')})$`, 'i');

    if (parts.length > 1 && prefixPattern.test(parts[0])) {
      parts.shift();
      return parts.join(' ').trim();
    }

    return str.trim();
  },
}