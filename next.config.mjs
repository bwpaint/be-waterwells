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
      // ── Retired /services/* pages → new five (folded content) ──
      { source: '/services/emergency-well-services', destination: '/services/residential', permanent: true },
      { source: '/services/well-pump-services', destination: '/services/residential', permanent: true },
      { source: '/services/well-pump-services/well-pump-repair', destination: '/services/residential', permanent: true },
      { source: '/services/well-pump-services/pump-installation-repair', destination: '/services/residential', permanent: true },
      { source: '/services/well-pump-services/constant-pressure-systems', destination: '/services/residential', permanent: true },
      { source: '/services/water-well-systems', destination: '/services/residential', permanent: true },
      { source: '/services/water-well-systems/pressure-tank-systems', destination: '/services/residential', permanent: true },
      { source: '/services/water-well-systems/generator-prep-kits', destination: '/services/residential', permanent: true },
      { source: '/services/water-well-drilling/new-well-drilling', destination: '/services/water-well-drilling', permanent: true },
      { source: '/services/water-well-drilling/irrigation-wells', destination: '/services/water-well-drilling', permanent: true },
      { source: '/services/water-well-drilling/commercial-agricultural-wells', destination: '/services/commercial', permanent: true },
      { source: '/services/well-maintenance/well-rehabilitation', destination: '/services/well-rehabilitation', permanent: true },
      { source: '/services/well-maintenance/well-inspection', destination: '/services/well-maintenance', permanent: true },
      { source: '/services/well-maintenance/ongoing-maintenance', destination: '/services/well-maintenance', permanent: true },

      // ── Retired Cost Guide page ──
      { source: '/resources/water-well-cost', destination: '/services/water-well-drilling', permanent: true },

      // ── Old flat / top-level URLs → new homes ──
      { source: '/water-well-drilling', destination: '/services/water-well-drilling', permanent: true },
      { source: '/irrigation-wells', destination: '/services/water-well-drilling', permanent: true },
      { source: '/pump-installation', destination: '/services/residential', permanent: true },
      { source: '/well-pump-repair', destination: '/services/residential', permanent: true },
      { source: '/well-pump-installation', destination: '/services/residential', permanent: true },
      { source: '/pressure-tank', destination: '/services/residential', permanent: true },
      { source: '/pressure-tanks', destination: '/services/residential', permanent: true },
      { source: '/constant-pressure', destination: '/services/residential', permanent: true },
      { source: '/constant-pressure-systems', destination: '/services/residential', permanent: true },
      { source: '/generator-prep', destination: '/services/residential', permanent: true },
      { source: '/emergency', destination: '/services/residential', permanent: true },
      { source: '/emergency-service', destination: '/services/residential', permanent: true },
      { source: '/well-rehabilitation', destination: '/services/well-rehabilitation', permanent: true },
      { source: '/well-inspection', destination: '/services/well-maintenance', permanent: true },
      { source: '/well-maintenance', destination: '/services/well-maintenance', permanent: true },
      { source: '/commercial-wells', destination: '/services/commercial', permanent: true },
      { source: '/agricultural-wells', destination: '/services/commercial', permanent: true },
    ];
  },
};

export default nextConfig;
