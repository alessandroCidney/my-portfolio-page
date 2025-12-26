import React, { Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { AnimatePresence, motion } from 'motion/react'

import { getKeyboardFocusableElements } from '@/app/utils/keyboard'

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

  function resetFocus() {
    const documentActiveElement = document.activeElement as HTMLElement | null

    if (documentActiveElement) {
      documentActiveElement.blur()
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget) && open) {
      // setOpen(false)
    }
  }

  function calculateMenuTransform() {
    if (activatorRef.current) {
      const activatorRect = activatorRef.current.getBoundingClientRect()

      setMenuTransform(`translateX(calc(-100% + ${Math.floor(activatorRect.width)}px))`)
    }
  }

  const moveFocusToFirstElement = useCallback(() => {
    const firstOption = document.querySelector<HTMLButtonElement>(`#${menuId} li button`)

    if (firstOption) {
      firstOption.setAttribute('tabindex', '0')
      firstOption.focus()
    }
  }, [menuId])

  const disableFocusOnCurrentElement = useCallback(() => {
    const currentFocusedItem = document.querySelector<HTMLButtonElement>(`#${menuId} li button[tabindex="0"]`)

    if (currentFocusedItem) {
      currentFocusedItem.setAttribute('tabindex', '-1')
    }
  }, [menuId])

  function handleOptionClick(selectedOption: string) {
    disableFocusOnCurrentElement()

    resetFocus()
    
    setOpen(false)

    setOption(selectedOption)
  }

  const focusOnActivator = useCallback(() => {
    disableFocusOnCurrentElement()

    const activatorElement = document.querySelector<HTMLButtonElement>(`#${activatorId}`)

    activatorElement?.focus()
  }, [activatorId, disableFocusOnCurrentElement])

  const focusOnElementOutsideMenu = useCallback((target: 'next' | 'previous') => {
    const currentFocusedItem = document.querySelector<HTMLButtonElement>(`#${menuId} li button[tabindex="0"]`)

    const focusableElements = getKeyboardFocusableElements()

    const currentFocusedIndex = focusableElements.findIndex(el => el === currentFocusedItem)

    disableFocusOnCurrentElement()

    const targetIndex = target === 'next' ? currentFocusedIndex + 1 : currentFocusedIndex - 1

    if (focusableElements[targetIndex]) {
      focusableElements[targetIndex].focus()
    } else if (focusableElements[0]) {
      focusableElements[0].focus()
    }

    setOpen(false)
  }, [disableFocusOnCurrentElement, menuId, setOpen])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // https://www.w3.org/WAI/ARIA/apg/patterns/menubar/
    // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role#keyboard_interactions

    event.preventDefault()

    const allOptions = Array.from(document.querySelectorAll<HTMLButtonElement>(`#${menuId} li button`))

    const focusedIndex = allOptions.findIndex(li => li.getAttribute('tabindex') === '0')

    function moveFocusToIndex(newIndex: number) {
      allOptions[newIndex].setAttribute('tabindex', '0')

      if (focusedIndex !== newIndex) {
        allOptions[focusedIndex].setAttribute('tabindex', '-1')
      }

      allOptions[newIndex].focus()
    }

    if (event.key === 'ArrowDown') {
      const nextIndex = focusedIndex === allOptions.length - 1 ? 0 : focusedIndex + 1

      moveFocusToIndex(nextIndex)

      return
    }

    if (event.key === 'ArrowUp') {
      const previousIndex = focusedIndex === 0 ? allOptions.length - 1 : focusedIndex - 1

      moveFocusToIndex(previousIndex)

      return
    }

    if (event.key === 'Escape') {
      focusOnActivator()

      setOpen(false)

      return
    }

    if (event.key === 'Tab') {
      focusOnElementOutsideMenu(event.shiftKey ? 'previous' : 'next')

      return
    }

    if (event.key === 'Home') {
      moveFocusToIndex(0)

      return
    }

    if (event.key === 'End') {
      moveFocusToIndex(allOptions.length - 1)

      return
    }

    allOptions[focusedIndex].click()
  }, [menuId, focusOnActivator, setOpen, focusOnElementOutsideMenu])

  useEffect(() => {
    if (open) {
      calculateMenuTransform()

      moveFocusToFirstElement()

      window.addEventListener('keydown', handleKeyDown)
    } else {
      window.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, open, moveFocusToFirstElement])

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