/**
 * isTrue returns `true` if the input is true
 *
 *
 * Sorry I could not come with a more ridiculous function.
 */
export function isTrue(b: boolean): boolean {
  return b === true;
}

/**
 * isFalse returns `true` if the input is false
 */
export function isFalse(b: boolean): boolean {
  return !isTrue(b);
}
