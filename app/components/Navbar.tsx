'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface NavbarProps {
  transparent?: boolean;
}

const serviceCategories = [
  {
    label: 'Water Well Drilling',
    href: '/services/water-well-drilling',
    children: [
      { label: 'New Well Drilling', href: '/services/water-well-drilling/new-well-drilling' },
      { label: 'Irrigation Wells', href: '/services/water-well-drilling/irrigation-wells' },
      { label: 'Commercial & Agricultural', href: '/services/water-well-drilling/commercial-agricultural-wells' },
    ],
  },
  {
    label: 'Emergency Well Service',
    href: '/services/emergency-well-services',
    children: [],
  },
  {
    label: 'Well Pump Services',
    href: '/services/well-pump-services',
    children: [
      { label: 'Well Pump Repair', href: '/services/well-pump-services/well-pump-repair' },
      { label: 'Pump Installation & Repair', href: '/services/well-pump-services/pump-installation-repair' },
      { label: 'Constant Pressure Systems', href: '/services/well-pump-services/constant-pressure-systems' },
    ],
  },
  {
    label: 'Water Well Systems',
    href: '/services/water-well-systems',
    children: [
      { label: 'Pressure Tank Systems', href: '/services/water-well-systems/pressure-tank-systems' },
      { label: 'Generator Prep Kits', href: '/services/water-well-systems/generator-prep-kits' },
    ],
  },
  {
    label: 'Well Maintenance',
    href: '/services/well-maintenance',
    children: [
      { label: 'Well Rehabilitation', href: '/services/well-maintenance/well-rehabilitation' },
      { label: 'Well Inspection', href: '/services/well-maintenance/well-inspection' },
      { label: 'Ongoing Maintenance', href: '/services/well-maintenance/ongoing-maintenance' },
    ],
  },
];

export default function Navbar({ transparent = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(!transparent);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);

  useEffect(() => {
    if (!transparent) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
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

          {/* Services mega-dropdown */}
          <li className={styles.hasDropdown}>
            <Link href="/services">Services ▾</Link>
            <div className={styles.megaDropdown}>
              <div className={styles.megaInner}>
                {serviceCategories.map((cat) => (
                  <div key={cat.href} className={styles.megaCol}>
                    <Link href={cat.href} className={styles.megaCatTitle}>
                      {cat.label}
                    </Link>
                    {cat.children.length > 0 && (
                      <ul className={styles.megaSubLinks}>
                        {cat.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className={styles.megaSubLink}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
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
            Free Estimate
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

          {serviceCategories.map((cat) => (
            <div key={cat.href} className={styles.mobileCategoryGroup}>
              <div className={styles.mobileCategoryRow}>
                <Link
                  href={cat.href}
                  className={styles.mobileCatLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.label}
                </Link>
                {cat.children.length > 0 && (
                  <button
                    className={styles.mobileToggle}
                    onClick={() =>
                      setOpenMobileCategory(
                        openMobileCategory === cat.href ? null : cat.href
                      )
                    }
                    aria-label={`Expand ${cat.label}`}
                  >
                    {openMobileCategory === cat.href ? '▲' : '▼'}
                  </button>
                )}
              </div>
              {openMobileCategory === cat.href && cat.children.length > 0 && (
                <div className={styles.mobileSubGroup}>
                  {cat.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={styles.mobileSublink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
