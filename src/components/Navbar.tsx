// src/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/create" style={styles.navLink}>Create Product</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/search" style={styles.navLink}>Search Product</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/allproducts" style={styles.navLink}>Products</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
