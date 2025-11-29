'use client'

import styles from './styles.module.scss'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

interface SkillCardProps {
  title: string
  description: string
  index: number,
  icon: IconDefinition
}

export function SkillCard(props: SkillCardProps) {
  return (
    <motion.article
      className={styles.skillCard}
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.05 * props.index,
      }}
    >
      <header>
        <div className={styles.skillIcon}>
          <FontAwesomeIcon icon={props.icon} size='2x' />
        </div>

        <h3>
          { props.title }
        </h3>
      </header>

      <p>
        { props.description }
      </p>
    </motion.article>
  )
}