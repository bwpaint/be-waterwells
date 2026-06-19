'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface NavbarProps {
  transparent?: boolean;
}

const serviceCategories = [
  { label: 'Water Well Drilling & Installation', href: '/services/water-well-drilling' },
  { label: 'Residential Water Well Services', href: '/services/residential' },
  { label: 'Commercial Water Well Services', href: '/services/commercial' },
  { label: 'Water Well Rehabilitation', href: '/services/well-rehabilitation' },
  { label: 'Water Well Maintenance & Inspection', href: '/services/well-maintenance' },
];

export default function Navbar({ transparent = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navWrapper} ${scrolled ? styles.scrolled : ''} ${transparent && !scrolled ? styles.transparent : ''}`}
    >
      <div className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.navLogo}>
          <Image
            src="https://bewaterwells.com/wp-content/uploads/2024/08/be-waterwell-logo_dkor-250x99.png"
            alt="B-E Waterwell Services"
            width={180}
            height={71}
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>

          {/* Services dropdown */}
          <li className={styles.hasDropdown}>
            <Link href="/services">Services ▾</Link>
            <div className={styles.dropdown}>
              <ul className={styles.dropdownList}>
                {serviceCategories.map((cat) => (
                  <li key={cat.href}>
                    <Link href={cat.href} className={styles.dropdownLink}>
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li><Link href="/service-areas">Service Areas</Link></li>
          <li><Link href="/resources/water-well-cost">Cost Guide</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* CTA */}
        <div className={styles.navCta}>
          <a href="tel:+12814484447" className={styles.phoneLink}>
            <span className={styles.phoneIcon}>📞</span>
            (281) 448-4447
          </a>
          <Link href="/contact" className="btn btn-primary">
            Get Assistance
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          {serviceCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={styles.mobileSublink}
              onClick={() => setMenuOpen(false)}
            >
              {cat.label}
            </Link>
          ))}

          <Link href="/service-areas" onClick={() => setMenuOpen(false)}>Service Areas</Link>
          <Link href="/resources/water-well-cost" onClick={() => setMenuOpen(false)}>Cost Guide</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="tel:+12814484447" className={styles.mobileCta}>(281) 448-4447</a>
        </div>
      )}
    </nav>
  );
}
