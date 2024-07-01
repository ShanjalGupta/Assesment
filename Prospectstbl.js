

const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

const sortedProspects = React.useMemo(() => {
  let sortableProspects = [...prospects];
  if (sortConfig !== null) {
    sortableProspects.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }
  return sortableProspects;
}, [prospects, sortConfig]);

const requestSort = (key) => {
  let direction = 'ascending';
  if (sortConfig.key === key && sortConfig.direction === 'ascending') {
    direction = 'descending';
  }
  setSortConfig({ key, direction });
};

// Inside table header
<th key={column.key} onClick={() => requestSort(column.key)}>
  {column.label}
</th>

// Rendering prospects
{sortedProspects.map((prospect) => (
  // Table row rendering code
))}
