export interface Header {
  label: string;
  type: 'string' | 'number';
}

export interface Table {
  metadata: Header[];
  data: Header['type'][][];
}

const mockTables = {
  luxury_cars: {
    metadata: [
      { label: 'brand', type: 'string' },
      { label: 'model', type: 'string' },
      { label: 'doors', type: 'number' },
      { label: 'color', type: 'string' },
      { label: 'year', type: 'string' },
    ],
    data: [],
  } as Table,
};

export default mockTables;
