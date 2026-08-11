import Image from 'next/image';
import styles from './KenBurnsSlideshow.module.css';

export interface KenBurnsSlide {
  src: string;
  /** Empty alt is correct here — the slideshow is decorative and the section
   *  around it already carries the meaning. A screen reader announcing six
   *  photo descriptions in a loop would be noise. */
  alt?: string;
}

interface Props {
  slides: KenBurnsSlide[];
  /** Seconds each slide holds before crossfading to the next. */
  secondsPerSlide?: number;
  /** Visible caption pinned to the bottom-left. */
  label?: string;
  className?: string;
}

/**
 * CSS-only Ken Burns slideshow.
 *
 * No JavaScript, no timers, no library. Every slide runs the same two
 * animations over one full cycle (slides x secondsPerSlide) and is offset by an
 * inline --kb-delay, so the browser handles all sequencing on the compositor.
 * That means it cannot drift, costs nothing on the main thread, and works with
 * JS disabled.
 *
 * Motion is suppressed entirely under prefers-reduced-motion — see the module.
 */
export default function KenBurnsSlideshow({
  slides,
  secondsPerSlide = 5,
  label,
  className,
}: Props) {
  const cycle = slides.length * secondsPerSlide;

  return (
    <div
      className={`${styles.kb} ${className ?? ''}`}
      style={
        {
          '--kb-cycle': `${cycle}s`,
          '--kb-count': slides.length,
        } as React.CSSProperties
      }
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={styles.slide}
          style={{ '--kb-delay': `${i * secondsPerSlide}s` } as React.CSSProperties}
          aria-hidden="true"
        >
          <div className={styles.pan}>
            <Image
              src={s.src}
              alt={s.alt ?? ''}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.img}
              /* Only the first frame is above the fold work — the rest can wait. */
              priority={i === 0}
            />
          </div>
        </div>
      ))}
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}
