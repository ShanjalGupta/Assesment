
import React, { useState } from 'react';
import { Prospect, Column } from '../types';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

const ProspectTable = ({ prospects, setProspects, columns, setColumns, setSelectedProspect }) => {
  const [newColumn, setNewColumn] = useState({ key: '', label: '', type: 'text' });

  const handleAddProspect = () => {
    const newProspect = { id: Date.now(), name: '', email: '', phone: '', status: '' };
    setProspects([...prospects, newProspect]);
  };

  const handleEditProspect = (id, key, value) => {
    const updatedProspects = prospects.map((prospect) =>
      prospect.id === id ? { ...prospect, [key]: value } : prospect
    );
    setProspects(updatedProspects);
  };

  const handleDeleteProspect = (id) => {
    const updatedProspects = prospects.filter((prospect) => prospect.id !== id);
    setProspects(updatedProspects);
  };

  const handleAddColumn = () => {
    setColumns([...columns, newColumn]);
    setNewColumn({ key: '', label: '', type: 'text' });
  };

  return (
    <div className="prospect-table">
      <button onClick={handleAddProspect}>
        <FaPlus /> Add Prospect
      </button>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {prospects.map((prospect) => (
            <tr key={prospect.id} onClick={() => setSelectedProspect(prospect)}>
              {columns.map((column) => (
                <td key={column.key}>
                  <input
                    type={column.type}
                    value={prospect[column.key]}
                    onChange={(e) => handleEditProspect(prospect.id, column.key, e.target.value)}
                  />
                </td>
              ))}
              <td>
                <button onClick={() => handleDeleteProspect(prospect.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-column">
        <input
          type="text"
          placeholder="Column Key"
          value={newColumn.key}
          onChange={(e) => setNewColumn({ ...newColumn, key: e.target.value })}
        />
        <input
          type="text"
          placeholder="Column Label"
          value={newColumn.label}
          onChange={(e) => setNewColumn({ ...newColumn, label: e.target.value })}
        />
        <select
          value={newColumn.type}
          onChange={(e) => setNewColumn({ ...newColumn, type: e.target.value })}
        >
          <option value="text">Text</option>
          <option value="checkbox">Checkbox</option>
          <option value="date">Date</option>
          <option value="number">Number</option>
        </select>
        <button onClick={handleAddColumn}>
          <FaPlus /> Add Column
        </button>
      </div>
      <style jsx>{`
        .prospect-table {
          flex-grow: 1;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f4f4f4;
        }
        .add-column {
          margin-top: 10px;
        }
        .add-column input, .add-column select {
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default ProspectTable;
