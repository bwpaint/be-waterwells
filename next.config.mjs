/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bewaterwells.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      // ── Old flat service URLs → new /services/[category]/[service] ──
      {
        source: '/water-well-drilling',
        destination: '/services/water-well-drilling/new-well-drilling',
        permanent: true,
      },
      {
        source: '/pump-installation',
        destination: '/services/well-pump-services/pump-installation-repair',
        permanent: true,
      },
      {
        source: '/well-rehabilitation',
        destination: '/services/well-maintenance/well-rehabilitation',
        permanent: true,
      },
      {
        source: '/irrigation-wells',
        destination: '/services/water-well-drilling/irrigation-wells',
        permanent: true,
      },
      {
        source: '/well-inspection',
        destination: '/services/well-maintenance/well-inspection',
        permanent: true,
      },
      {
        source: '/generator-prep',
        destination: '/services/water-well-systems/generator-prep-kits',
        permanent: true,
      },
      // ── Legacy WordPress URLs (from existing site) ──
      {
        source: '/services/water-well-drilling',
        destination: '/services/water-well-drilling',
        permanent: false, // already correct, skip
      },
      {
        source: '/well-pump-repair',
        destination: '/services/well-pump-services/pump-installation-repair',
        permanent: true,
      },
      {
        source: '/well-pump-installation',
        destination: '/services/well-pump-services/pump-installation-repair',
        permanent: true,
      },
      {
        source: '/pressure-tank',
        destination: '/services/water-well-systems/pressure-tank-systems',
        permanent: true,
      },
      {
        source: '/pressure-tanks',
        destination: '/services/water-well-systems/pressure-tank-systems',
        permanent: true,
      },
      {
        source: '/constant-pressure',
        destination: '/services/well-pump-services/constant-pressure-systems',
        permanent: true,
      },
      {
        source: '/constant-pressure-systems',
        destination: '/services/well-pump-services/constant-pressure-systems',
        permanent: true,
      },
      {
        source: '/well-maintenance',
        destination: '/services/well-maintenance',
        permanent: true,
      },
      {
        source: '/commercial-wells',
        destination: '/services/water-well-drilling/commercial-agricultural-wells',
        permanent: true,
      },
      {
        source: '/agricultural-wells',
        destination: '/services/water-well-drilling/commercial-agricultural-wells',
        permanent: true,
      },
      {
        source: '/emergency',
        destination: '/services/emergency-well-services',
        permanent: true,
      },
      {
        source: '/emergency-service',
        destination: '/services/emergency-well-services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
