const TEXT_REPLACEMENTS: Array<[string, string]> = [
  ["ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â", " - "],
  ["Ã¢â‚¬â€", " - "],
  ["â€”", " - "],
  ["â€“", " - "],
  ["â€™", "'"],
  ["â€˜", "'"],
  ['â€œ', '"'],
  ['â€\u009d', '"'],
  ["â€¦", "..."],
  ["Â ", " "],
];

export const normalizeMisencodedText = (text: string) =>
  TEXT_REPLACEMENTS.reduce(
    (value, [search, replacement]) => value.split(search).join(replacement),
    text,
  ).trim();

export const normalizeTextDeep = <T>(value: T): T => {
  if (typeof value === "string") {
    return normalizeMisencodedText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeTextDeep(item)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        normalizeTextDeep(nestedValue),
      ]),
    ) as T;
  }

  return value;
};
