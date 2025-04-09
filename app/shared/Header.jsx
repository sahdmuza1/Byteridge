'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>sahD</Link>

        <div className={`${styles.navLinks} ${open ? styles.open : ''}`}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Header;
