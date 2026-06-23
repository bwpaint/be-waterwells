'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface NavbarProps {
  transparent?: boolean;
}

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const serviceCategories: NavItem[] = [
  { label: 'Water Well Drilling and Installation', href: '/services/water-well-drilling' },
  {
    label: 'Water Well Services',
    href: '/services',
    children: [
      { label: 'Residential Services', href: '/services/residential' },
      { label: 'Commercial Services', href: '/services/commercial' },
    ],
  },
  { label: 'Water Well Rehabilitation', href: '/services/well-rehabilitation' },
  { label: 'Water Well Maintenance and Inspections', href: '/services/well-maintenance' },
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
                  <li
                    key={cat.href}
                    className={cat.children ? styles.hasFlyout : undefined}
                  >
                    <Link href={cat.href} className={styles.dropdownLink}>
                      {cat.label}
                      {cat.children && <span className={styles.flyoutCaret}>›</span>}
                    </Link>
                    {cat.children && (
                      <ul className={styles.flyout}>
                        {cat.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className={styles.dropdownLink}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li><Link href="/service-areas">Service Areas</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* CTA */}
        <div className={styles.navCta}>
          <a href="tel:+12814484447" className="btn btn-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (281) 448-4447
          </a>
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
          {serviceCategories.flatMap((cat) => [
            <Link
              key={cat.href}
              href={cat.href}
              className={styles.mobileSublink}
              onClick={() => setMenuOpen(false)}
            >
              {cat.label}
            </Link>,
            ...(cat.children
              ? cat.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={styles.mobileSubSublink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))
              : []),
          ])}

          <Link href="/service-areas" onClick={() => setMenuOpen(false)}>Service Areas</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="tel:+12814484447" className={styles.mobileCta}>(281) 448-4447</a>
        </div>
      )}
    </nav>
  );
}
