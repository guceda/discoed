export interface TableHeader {
  label: string;
  type: 'str' | 'int' | 'float';
}

export type Metadata = TableHeader[];

export interface Table {
  metadata: Metadata;
  data: TableHeader['type'][][];
}

const mockTables = {
  luxury_cars: {
    metadata: [
      { label: 'brand', type: 'str' },
      { label: 'model', type: 'str' },
      { label: 'doors', type: 'int' },
      { label: 'color', type: 'str' },
      { label: 'year', type: 'str' },
    ],
    data: [],
  } as Table,
};

export default mockTables;
