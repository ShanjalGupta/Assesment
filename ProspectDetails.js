

import React, { useState } from 'react';
import { Prospect } from '../types';

const ProspectDetails = ({ prospect, setProspect }) => {
  const [activeTab, setActiveTab] = useState('Tasks');

  return (
    <div className="prospect-details">
      <h2>{prospect.name}</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('Tasks')}>Tasks</button>
        <button onClick={() => setActiveTab('Notes')}>Notes</button>
        <button onClick={() => setActiveTab('
