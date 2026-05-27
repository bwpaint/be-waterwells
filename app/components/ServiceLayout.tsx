import ServiceSidebar from './ServiceSidebar';
import styles from './ServiceLayout.module.css';

interface ServiceLayoutProps {
  children: React.ReactNode;
  category?: string;
  categoryLabel?: string;
  defaultService?: string;
}

/**
 * Two-column wrapper used by every page under /services/.
 * Main content left, sticky sidebar right (search + contact + blog links).
 */
export default function ServiceLayout({
  children,
  category,
  categoryLabel,
  defaultService,
}: ServiceLayoutProps) {
  return (
    <div className={styles.serviceGrid}>
      <div className={styles.mainContent}>{children}</div>
      <div className={styles.sidebarCol}>
        <ServiceSidebar
          category={category}
          categoryLabel={categoryLabel}
          defaultService={defaultService}
        />
      </div>
    </div>
  );
}
