import SemanticSearchService from '../../../../services/SemanticSearchService';
import { EntryListProps } from '../EntryList';

const semanticSearch = (
  search: string,
  entries: EntryListProps['entries'],
): any => {
  SemanticSearchService.search(search)
    .then((results) => {
      console.log('Model: ready');
      const matchingEntries = results.map((res) =>
        entries.find((entry) => entry.command === res.metadata),
      );
      return matchingEntries;
    })
    .catch((err) => {
      console.log('Model: error');
      console.log(err);
      return [] as EntryListProps['entries'];
    });
};

export default semanticSearch;
