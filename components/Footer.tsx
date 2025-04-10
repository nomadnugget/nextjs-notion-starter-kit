import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import * as React from 'react';

import * as config from '@/lib/config';
import { useDarkMode } from '@/lib/use-dark-mode';

import styles from './styles.module.css';

export function FooterImpl() {
  const [hasMounted, setHasMounted] = React.useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const currentYear = new Date().getFullYear();

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault();
      toggleDarkMode();
    },
    [toggleDarkMode]
  );

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Copyright {currentYear} Nomad Nugget
      </div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <FaEnvelopeOpenText /> : <FaEnvelopeOpenText />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.blog && (
          <a
            className={styles.blog}
            href={config.blog}
            title={`Blog`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelopeOpenText />
          </a>
        )}

        {config.instagram && (
          <a
            className={styles.instagram}
            href={config.instagram}
            title={`Instagram`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={config.youtube}
            title={`YouTube`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </footer>
  );
}

export const Footer = React.memo(FooterImpl);
