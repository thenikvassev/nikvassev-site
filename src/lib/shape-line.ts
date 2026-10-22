/**
 * Keep a short word from sitting at the end of a line, and keep the final
 * word with the one before it. Non-breaking spaces are display-only.
 */
export function shapeLine(text: string): string {
  const glued = text.replace(
    /(^|\s)(\S{1,3})\s+(?=\S)/g,
    (_match, lead: string, word: string) => `${lead}${word}\u00A0`,
  );
  return glued.replace(/ ([^\s]+)$/, "\u00A0$1");
}
