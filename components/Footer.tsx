import { FaBlog } from '@react-icons/all-files/fa/FaBlog' // 블로그 아이콘 추가
import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import * as React from 'react'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

export function FooterImpl() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const currentYear = new Date().getFullYear()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Copyright 2025 Nomad Nugget
      </div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href="#"
            role="button"
            onClick={onToggleDarkMode}
            title="Toggle dark mode"
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {/* Blog */}
        <a
          className={styles.blog}
          href="http://blog.naver.com/heathertour"
          title="Blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBlog /> {/* Blog 아이콘 */}
        </a>

        {/* Instagram */}
        <a
          className={styles.instagram}
          href="http://instagram.com/nomad_nugget_"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        {/* Youtube */}
        <a
          className={styles.youtube}
          href="https://youtube.com/@nomadnugget?si=oCHaVs2Hah4J85VH"
          title="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>

        {/* 추가적인 소셜 링크가 필요하면 여기에 추가하시면 됩니다 */}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
