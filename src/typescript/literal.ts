import * as ts from 'typescript';

/** Returns the text of a string literal without the quotes. */
export function getLiteralTextWithoutQuotes(literal: ts.StringLiteral) {
  return literal.getText().substring(1, literal.getText().length - 1);
}

/** Method that can be used to replace all search occurrences in a string. */
export function replaceAll(str: string, search: string, replacement: string) {
  while (str.indexOf(search) !== -1) {
    str = str.replace(search, replacement);
  }
  return str;
}

/** Method that can be used to replace all search occurrences in a string in a tag. */
export function replaceAllInputsInTag(str: string, search: string, replacement: string, tag: string) {
  const pattern = new RegExp(`(<.*${tag}[^>]+)\\[${search}]`);
  while (pattern.test(str)) {
    str = str.replace(pattern, `$1\[${replacement}]`);
  }
  return str;
}


/** Method that can be used to replace all search occurrences in a string in a tag. */
export function replaceAllOutputsInTag(str: string, search: string, replacement: string, tag: string) {
  const pattern = new RegExp(`(<.*${tag}[^>]+)\\(${search}\\)`);
  while (pattern.test(str)) {
    str = str.replace(pattern, `$1\(${replacement})`);
  }
  return str;
}
