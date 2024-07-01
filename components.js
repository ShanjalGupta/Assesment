

import React from 'react';
import Sidebar from './Sidebar';
import CommandBar from './CommandBar';

const items = [
  { name: 'Prospects', type: 'page', path: '/prospects' },
  { name: 'Companies', type: 'page', path: '/companies' },
  { name: 'Settings', type: 'page', path: '/settings' },
  { name: 'Search', type: 'page', path: '/search' },
  { name: 'Notifications', type: 'page', path: '/notifications' },
  { name: 'Tasks', type: 'page', path: '/tasks' },
  // Add more items as needed
];

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
      <CommandBar items={items} />
      <style jsx>{`
        .layout {
          display: flex;
        }
        .content {
          flex-grow: 1;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
