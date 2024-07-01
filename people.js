

import React, { useState } from 'react';
import ProspectTable from '../components/ProspectTable';
import ProspectDetails from '../components/ProspectDetails';
import { Prospect, Column } from '../types';

const initialProspects: Prospect[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', status: 'Inactive' },
  // Add more example prospects
];

const initialColumns: Column[] = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'email', label: 'Email', type: 'text' },
  { key: 'phone', label: 'Phone', type: 'text' },
  { key: 'status', label: 'Status', type: 'text' },
];

const People = () => {
  const [prospects, setProspects] = useState(initialProspects);
  const [columns, setColumns] = useState(initialColumns);
  const [selectedProspect, setSelectedProspect] = useState(null);

  return (
    <div className="people-page">
      <ProspectTable
        prospects={prospects}
        setProspects={setProspects}
        columns={columns}
        setColumns={setColumns}
        setSelectedProspect={setSelectedProspect}
      />
      {selectedProspect && (
        <ProspectDetails prospect={selectedProspect} setProspect={setSelectedProspect} />
      )}
      <style jsx>{`
        .people-page {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default People;
