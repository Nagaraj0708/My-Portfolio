export interface RawContactPayload {
  name: string;
  email: string;
  scope?: string;
  message: string;
}

export interface FormattedContactPayload {
  name: string;
  email: string;
  scope: string;
  message: string;
}

/**
 * Capitalizes the starting letter of each word (Title Case) for names/labels.
 */
export function capitalizeWords(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Capitalizes the very first non-whitespace character of a string.
 */
export function capitalizeFirst(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/**
 * Normalizes contact submission fields so Name, Email, Scope, and Message
 * start with capital letters while preserving valid email deliverability.
 */
export function formatContactPayload(
  raw: RawContactPayload
): FormattedContactPayload {
  return {
    name: capitalizeWords(raw.name),
    email: capitalizeFirst(raw.email),
    scope: capitalizeWords(raw.scope || "General Inquiry"),
    message: capitalizeFirst(raw.message),
  };
}
