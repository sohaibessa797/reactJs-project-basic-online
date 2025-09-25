/**
 * Slices a given text to a specified maximum length and appends "..." if the text exceeds that length.
 *
 * @param {string} txt - The text to be sliced.
 * @param {number} [max=50] - The maximum number of characters allowed before slicing. Defaults to 50.
 * @returns {string} - The sliced text with "..." appended if it exceeded the maximum length, or the original text otherwise.
 *
 * @example
 * textSlicer("Hello, world!", 5);
 * // Returns: "Hello..."
 *
 * @example
 * textSlicer("Short text", 50);
 * // Returns: "Short text"
 */
export function textSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}
