// components/Sidebar.js

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaUser, FaBuilding, FaCogs, FaSearch, FaBell, FaTasks } from 'react-icons/fa';

const Sidebar = () => {
  const router = useRouter();
  
  const navigationItems = [
    { name: 'Prospects', icon: <FaUser />, path: '/prospects' },
    { name: 'Companies', icon: <FaBuilding />, path: '/companies' },
    { name: 'Settings', icon: <FaCogs />, path: '/settings' },
    { name: 'Search', icon: <FaSearch />, path: '/search' },
    { name: 'Notifications', icon: <FaBell />, path: '/notifications' },
    { name: 'Tasks', icon: <FaTasks />, path: '/tasks' },
  ];

  return (
    <div className="sidebar">
      <div className="user-info">
        {/* Replace with dynamic user information */}
        <p>Logged in as: Noah</p>
        <p>Organization: Demo Inc.</p>
      </div>
      <nav>
        {navigationItems.map((item, index) => (
          <Link href={item.path} key={index}>
            <a className={`nav-item ${router.pathname === item.path ? 'active' : ''}`}>
              {item.icon}
              <span>{item.name}</span>
            </a>
          </Link>
        ))}
      </nav>
      <style jsx>{`
        .sidebar {
          width: 250px;
          background-color: #2e3a46;
          color: #fff;
          height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }
        .user-info {
          margin-bottom: 20px;
        }
        .nav-item {
          display: flex;
          align-items: center;
          padding: 10px;
          color: #fff;
          text-decoration: none;
          margin-bottom: 10px;
        }
        .nav-item.active {
          background-color: #1d252c;
        }
        .nav-item:hover {
          background-color: #1d252c;
        }
        .nav-item span {
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
