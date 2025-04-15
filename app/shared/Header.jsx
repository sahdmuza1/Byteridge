'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <img
        src="/img1.webp"
        alt="Top Badge"
        className={styles.topBadge}
      />
      <div className={styles.container}>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} />

        <div className={`${styles.navLinks} ${open ? styles.open : ''}`}>
          <Link href="/" className={styles.link}>Service</Link>
          <Link href="/about" className={styles.link}>Knowledge Centre</Link>
          <Link href="/services" className={styles.link}>Careers</Link>
          <Link href="/about-us" className={styles.link}>About Us</Link>
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
