export const encodePromptComponent = (prompt: string): string => composeStringOperations(encodeURIComponent, replaceMissingChars, decodeSpaces)(prompt);

const charsMissingFromUrlEncode = /[!'()*~_.-]/g;

const missingCharsMap: { [char: string]: string } = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '*': '%2A',
  '~': '%7E',
  _: '%5F',
  '.': '%2E',
  '-': '%2D',
};

const replaceMissingChars = (str: string): string => {
  return str.replace(charsMissingFromUrlEncode, (match) => missingCharsMap[match] ?? match);
};

const decodeSpaces = (str: string): string => str.replace(/%20/g, ' ');
const composeStringOperations = (...fns: Array<(str: string) => string>) => (arg: string) => fns.reduce((acc, fn) => fn(acc), arg);