'use client';

import { useState } from 'react';
import styles from './CityFaqAccordion.module.css';

interface Faq {
  question: string;
  answer: string;
}

interface Props {
  faqs: Faq[];
}

export default function CityFaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className={styles.accordion}>
      {faqs.map((faq, i) => (
        <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
          <button
            className={styles.question}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{faq.question}</span>
            <span className={styles.chevron} aria-hidden="true">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          <div className={styles.answerWrap}>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
