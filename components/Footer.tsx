import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import * as React from 'react'

import * as config from '@/lib/config'

import styles from './styles.module.css'

export function FooterImpl() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Copyright {new Date().getFullYear()} Nomad Nugget
      </div>

      <div className={styles.social}>
        {config.blog && (
          <a
            className={styles.blog}
            href={config.blog}
            title="Blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelopeOpenText />
          </a>
        )}

        {config.instagram && (
          <a
            className={styles.instagram}
            href={config.instagram}
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={config.youtube}
            title="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
