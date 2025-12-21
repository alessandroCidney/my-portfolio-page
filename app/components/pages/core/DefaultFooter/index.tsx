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
      className='h-80 bg-primary'
    >
      
    </footer>
  )
}