'use client'

import Link from 'next/link'

import { motion } from 'motion/react'

import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

import { DefaultButton } from '@/app/components/commons/DefaultButton'
import { ShareButton } from '@/app/components/commons/ShareButton'

import { scrollToTop } from '@/app/utils/scroll'

export function DefaultFooter() {
  return (
    <footer
      id='contact'
      className={styles.defaultFooter}
    >
      <div className={styles.letsWorkTogetherArea}>
        <h2>
          Vamos trabalhar <br/>
          juntos?
        </h2>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <DefaultButton
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            target='_blank'
            style={{
              backgroundColor: 'var(--theme-primary-color)',
              minWidth: '200px',
              fontSize: '5rem',
            }}
            variant='flat'
            link
            icon
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{
                transform: 'translate(-50%, -50%) rotate(-45deg)',
              }}
            />
          </DefaultButton>
        </motion.div>
      </div>

      <div className={styles.footerContent}>
        <section>
          <h2>
            Contate-me via e-mail
          </h2>

          <p>
            { process.env.NEXT_PUBLIC_CONTACT_EMAIL }
          </p>
        </section>

        <section>
          <h2>
            Siga-me
          </h2>

          <ul>
            <li>
              <Link
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || ''}
                target='_blank'
              >
                LinkedIn
              </Link>
            </li>

            <li>
              <Link
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || ''}
                target='_blank'
              >
                Instagram
              </Link>
            </li>

            <li>
              <Link
                href={process.env.NEXT_PUBLIC_MEDIUM_URL || ''}
                target='_blank'
              >
                Medium
              </Link>
            </li>

            <li>
              <Link
                href={process.env.NEXT_PUBLIC_GITHUB_URL || ''}
                target='_blank'
              >
                Github
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>
            Ações
          </h2>

          <div>
            <ShareButton />

            <DefaultButton
              appendIcon={<FontAwesomeIcon icon={faCircleArrowUp} />}
              style={{
                width: '100%',
              }}
              persistentIcon
              onClick={scrollToTop}
            >
              Voltar ao topo
            </DefaultButton>
          </div>
        </section>
      </div>

      <div className={styles.copyrightArea}>
        Copyright©2025 Alessandro Cídney
      </div>
    </footer>
  )
}