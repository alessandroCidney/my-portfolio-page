import React, { Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { AnimatePresence, motion } from 'motion/react'

import { useMenuKeyboard } from '@/app/hooks/useMenuKeyboard'

interface FloatingMenuProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>

  activator: ReactNode

  activatorId: string
  menuId: string

  className?: string

  setOption: (newOption: string) => void

  options: Array<{
    title: string
    id: string
  }>
}

export function FloatingMenu({
  open,
  setOpen,

  activator,

  className,

  activatorId,
  menuId,

  options,
  setOption,
}: FloatingMenuProps) {
  const activatorRef = useRef<HTMLDivElement>(null)
  const menuContentRef = useRef<HTMLUListElement>(null)

  const [menuTransform, setMenuTransform] = useState('')

  function calculateMenuTransform() {
    if (activatorRef.current) {
      const activatorRect = activatorRef.current.getBoundingClientRect()

      setMenuTransform(`translateX(calc(-100% + ${Math.floor(activatorRect.width)}px))`)
    }
  }

  const { handleOptionClick, handleMenuBlur } = useMenuKeyboard({
    menuItemSelector: `#${menuId} li button`,
    activatorSelector: `#${activatorId}`,

    open,
    setOpen,

    handleSelectOption: setOption,
  })

  useEffect(() => {
    if (open) {
      calculateMenuTransform()
    }
  }, [open])

  return (
    <div
      className={`${className} relative text-black`}
    >
      <div ref={activatorRef}>
        { activator }
      </div>

      <AnimatePresence>
        {
          true && (
            <motion.ul
              id={menuId}
              ref={menuContentRef}
              className={`
                ${open ? 'fixed' : 'hidden'}

                bg-white

                rounded-lg

                shadow-xl
              `}
              style={{
                transform: menuTransform,
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              role='menu'
              aria-labelledby={activatorId}
              tabIndex={-1}
              onBlur={handleMenuBlur}
            >
              {
                options.map((option, optionIndex) => (
                  <li
                    key={`optionKey${optionIndex}`}
                    role='presentation'
                  >
                    <button
                      id={`${menuId}-${option.id}`}
                      className='p-4 w-full min-w-50 text-start cursor-pointer hover:bg-black/10 active:bg-black/20'
                      role='menuitem'
                      tabIndex={-1}
                      onClick={() => handleOptionClick(option.id)}
                    >
                      { option.title }
                    </button>
                  </li>
                ))
              }
            </motion.ul>
          )
        }
      </AnimatePresence>
    </div>
  )
}