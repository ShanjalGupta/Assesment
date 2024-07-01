// components/Layout.js

import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
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
