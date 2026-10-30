/** Serialize JSON-LD so a `<` in a string cannot close the surrounding script tag. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
