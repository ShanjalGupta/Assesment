

import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/router';
import Fuse from 'fuse.js';

const CommandBar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const router = useRouter();

  const fuse = new Fuse(items, {
    keys: ['name', 'type'],
    threshold: 0.3,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen((isOpen) => !isOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      setResults(fuse.search(query).map((result) => result.item));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = (item) => {
    setIsOpen(false);
    if (item.type === 'page') {
      router.push(item.path);
    } else if (item.type === 'prospect' || item.type === 'company') {
      // Handle viewing details of a prospect or company
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-4">
        <input
          type="text"
          placeholder="Type a command or search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border-b border-gray-300"
        />
        <ul className="mt-4">
          {results.map((item, index) => (
            <li key={index} className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => handleSelect(item)}>
              {item.name} ({item.type})
            </li>
          ))}
        </ul>
      </div>
    </Dialog>
  );
};

export default CommandBar;
