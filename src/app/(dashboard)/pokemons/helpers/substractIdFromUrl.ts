/**
 * Extracts the numeric ID from a given URL string.
 *
 * The function assumes that the URL contains an ID as the second-to-last segment
 * when split by forward slashes (`/`). It parses this segment into an integer.
 *
 * @param url - The URL string from which to extract the ID.
 * @returns The numeric ID extracted from the URL.
 *
 * @example
 * ```typescript
 * const url = "https://pokeapi.co/api/v2/pokemon/25/";
 * const id = getIdFromUrl(url); // 25
 * ```
 */
export const substractIdFromUrl = (url: string): number =>
  parseInt(url.split("/").slice(-2)[0]);
