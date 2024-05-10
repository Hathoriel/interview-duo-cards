export const stringUtils = {
  boldText: (textToDecorate: string, str: string) => {

  },
  removePrefixBySpace: (str: string) => {
    const parts = str.trim().split(' ')
    if (parts.length > 1) {
      parts.shift()
      return parts.join(' ')
    }
    return str.trim()
  }
}