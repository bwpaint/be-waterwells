'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface NavbarProps {
  transparent?: boolean; // homepage uses transparent→solid; internal pages solid from load
}

const services = [
  { label: 'Water Well Drilling', href: '/water-well-drilling' },
  { label: 'Pump Installation & Repair', href: '/pump-installation' },
  { label: 'Well Rehabilitation', href: '/well-rehabilitation' },
  { label: 'Irrigation Wells', href: '/irrigation-wells' },
  { label: 'Well Inspection', href: '/well-inspection' },
  { label: 'Generator Prep Kits', href: '/generator-prep' },
];

export default function Navbar({ transparent = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(!transparent);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparent]);

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
          <li
            className={styles.hasDropdown}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span>Services ▾</span>
            {servicesOpen && (
              <ul className={styles.dropdown}>
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><Link href="/service-areas">Service Areas</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* CTA */}
        <div className={styles.navCta}>
          <a href="tel:+12814484447" className={styles.phoneLink}>
            <span className={styles.phoneIcon}>📞</span>
            (281) 448-4447
          </a>
          <Link href="/contact" className="btn btn-primary">
            Free Estimate
          </Link>
        </div>

        {/* Mobile hamburger */}
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
          <span className={styles.mobileGroupLabel}>Services</span>
          {services.map((s) => (
            <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)} className={styles.mobileSublink}>
              {s.label}
            </Link>
          ))}
          <Link href="/service-areas" onClick={() => setMenuOpen(false)}>Service Areas</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="tel:+12814484447" className={styles.mobileCta}>(281) 448-4447</a>
        </div>
      )}
    </nav>
  );
}
