// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Photo Feed</h1>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#282c34',
    padding: '1rem',
    color: 'white',
    textAlign: 'center',
  },
  title: {
    margin: 0,
  },
};

export default Navbar;
