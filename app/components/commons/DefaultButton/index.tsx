import React, { useMemo } from 'react'

const colorVariants = {
  primary: {
    variants: {
      flat: 'bg-primary hover:bg-primary-darken-1 text-white',
      tonal: '',
    },
  },
  white: {
    variants: {
      flat: '',
      tonal: 'bg-white/20 hover:bg-white/30 text-white',
    },
  },
}

type ValueOf<T> = T[keyof T]

interface DefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean
  block?: boolean

  color?: keyof typeof colorVariants
  variant?: 'flat' | 'tonal'

  textColor?: string
}

export function DefaultButton({
  children,

  icon,
  block,

  color = 'primary',
  variant = 'flat',

  className,

  ...rest
}: DefaultButtonProps) {

  const classNameStr = useMemo(() => {
    const classNameArr = [`${colorVariants[color].variants[variant]} rounded-full cursor-pointer`]

    if (icon) {
      classNameArr.push('size-12')
    } else if (block) {
      classNameArr.push('w-full h-14 px-8 font-medium text-xl')
    } else {
      classNameArr.push('min-w-50 h-14 px-8 font-medium text-xl')
    }

    if (className) {
      classNameArr.push(className)
    }

    return classNameArr.join(' ')
  }, [block, className, color, icon, variant]) 

  return (
    <button
      className={classNameStr}
      {...rest}
    >
      { children }
    </button>
  )
}