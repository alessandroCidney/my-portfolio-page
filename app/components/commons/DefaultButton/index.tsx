import React, { ReactNode, useMemo } from 'react'

const colorVariants = {
  primary: {
    variants: {
      flat: 'bg-primary hover:bg-primary-darken-1 text-white',
      tonal: 'bg-primary/20 hover:bg-primary/30 text-primary',
      text: 'bg-transparent hover:bg-primary/20 text-primary',
    },
  },
  white: {
    variants: {
      flat: 'bg-gray-50 hover:bg-gray-200 text-black',
      tonal: 'bg-white/20 hover:bg-white/30 text-white',
      text: 'bg-transparent hover:bg-white/20 text-white',
    },
  },
}

interface BaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appendIcon?: ReactNode

  icon?: boolean
  block?: boolean

  color?: keyof typeof colorVariants
  variant?: 'flat' | 'tonal' | 'text'
  position?: string
  textColor?: string

  large?: boolean
  link?: boolean
}

type ActionButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  link?: false
}

type LinkButtonProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  link: true
}

function ButtonContent({ children, appendIcon }: BaseProps) {
  return <>
    { children }

    {
      !!appendIcon &&
        <span className='ml-2'>
          { appendIcon }
        </span>
    }
  </>
}

export function DefaultButton({
  children,
  appendIcon,

  icon,
  block,

  color = 'primary',
  variant = 'flat',
  position = 'relative',

  className,

  large,
  link,

  ...rest
}: (ActionButtonProps | LinkButtonProps) & BaseProps) {

  const classNameStr = useMemo(() => {
    const classNameArr = [`${colorVariants[color].variants[variant]} ${position} rounded-full font-medium tracking-tight cursor-pointer flex items-center justify-center`]

    if (icon) {
      classNameArr.push('size-12')
    } else if (large) {
      classNameArr.push('min-w-50 text-xl h-14 px-8')
    } else {
      classNameArr.push('min-w-35 px-6 h-12')
    }
    
    if (block) {
      classNameArr.push('w-full')
    }

    if (className) {
      classNameArr.push(className)
    }

    return classNameArr.join(' ')
  }, [block, className, color, icon, large, position, variant])

  const nodeItems = { children, appendIcon }

  return link
    ? <a
      className={classNameStr}
      {...rest as LinkButtonProps}
    >
      <ButtonContent {...rest} {...nodeItems} />
    </a>

    : <button
      className={classNameStr}
      {...rest as ActionButtonProps}
    >
      <ButtonContent {...rest} {...nodeItems} />
    </button>
}
