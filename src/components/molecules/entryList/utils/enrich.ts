import { EntryProperties, EntryType } from '../../entry/types';

export interface Highlight {
  property: string;
  start: number;
  end: number;
}

export interface EnrichedEntry extends EntryType {
  highlights: Highlight[];
}

const getHighLights = (
  field: Highlight['property'],
  sourceStr: string,
  query: string,
): Highlight[] => {
  const matches = Array.from(sourceStr.matchAll(new RegExp(query, 'gi')));
  return matches.map((match) => ({
    property: field,
    start: match.index as number,
    end: ((match.index as number) + query.length) as number,
  }));
};

export default (
  entries: EntryType[],
  targetFields: EntryProperties[],
  query?: string,
) => {
  if (!query) return entries.map((entry) => ({ ...entry, highlights: [] }));
  return entries.map((entry) => {
    const enriched: EnrichedEntry = { ...entry, highlights: [] };
    targetFields.forEach((field) => {
      const hasField = field in enriched;
      const isMatch = hasField && (enriched[field] as string).includes(query);
      if (isMatch) {
        enriched.highlights.push(
          ...getHighLights(field, enriched[field] as string, query),
        );
      }
    });
    return enriched;
  });
};
