'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

export interface ProjectCardProps {
  title: string
  description: string

  imageSrc: string
  projectUrl: string

  reversed?: boolean
  index: number
}

export function ProjectCard(props: ProjectCardProps) {
  const [hovering, setHovering] = useState(false)

  return (
    <motion.article
      className={styles.projectCard}
      initial={{
        opacity: 0,
        x: props.reversed ? 30 : -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.05 * props.index,
      }}
    >
      <header>
        <div className={styles.imageBackgroundContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={props.imageSrc}
              alt=''
              fill
            />
          </div>
        </div>

        <h3>
          { props.title }
        </h3>
      </header>

      <div className={styles.contentContainer}>
        <p>
          { props.description }
        </p>
      </div>

      <Link
        href={props.projectUrl}
        target='_blank'
        className={styles.actionsContainer}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {
          hovering && (
            <motion.div
              className={styles.animatedArea}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              <motion.div
                className={styles.iconContainer}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{
                    transform: 'rotate(-45deg)',
                  }}
                />
              </motion.div>
            </motion.div>
          )
        }
      </Link>
    </motion.article>
  )
}
