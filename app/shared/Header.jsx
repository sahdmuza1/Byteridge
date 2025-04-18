'use client';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.innerContainer}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <img src="/logo.png" alt="Logo" className={styles.logoImage} />
        </div>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${open ? styles.open : ''}`}>
          <Link href="/" className={styles.link}>Services</Link>
          <Link href="/about" className={styles.link}>Knowledge Centre</Link>
          <Link href="/services" className={styles.link}>Careers</Link>
          <Link href="/about-us" className={styles.link}>About Us</Link>
          <Link href="/contact" className={styles.link}>Contact Us</Link>
        </div>

        {/* Badge */}
        <div className={styles.badgeWrapper}>
          <img src="/img1.webp" alt="Badge" className={styles.topBadge} />
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
  {open ? <FaTimes /> : <FaBars />}
</button>


      </div>
    </nav>
  );
};

export default Header;
