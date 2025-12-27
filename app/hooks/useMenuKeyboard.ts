import { useCallback, useEffect } from 'react'

interface UseKeyboardProps<SelectOptionParams> {
  menuItemSelector: string
  activatorSelector: string

  open: boolean
  setOpen: (bool: boolean) => void

  handleSelectOption?: (...rest: SelectOptionParams[]) => void

  interactionOptions?: {
    arrowInteraction: boolean
    homeEndInteraction: boolean
    
    onTabPress: 'close_menu' | 'select_next_item'
  }
}

export function useMenuKeyboard<SelectOptionParams>({
  setOpen,
  open,

  menuItemSelector,
  activatorSelector,

  handleSelectOption,

  interactionOptions = {
    arrowInteraction: true,
    homeEndInteraction: true,
    onTabPress: 'close_menu',
  },
}: UseKeyboardProps<SelectOptionParams>) {
  // https://zellwk.com/blog/keyboard-focusable-elements/ (improved version)
  function getKeyboardFocusableElements(element = document) {
    return [
      ...element.querySelectorAll<HTMLElement>(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
      ),
    ].filter(
      el => !el.hasAttribute('disabled') &&
      !el.getAttribute('aria-hidden') &&
      el.getAttribute('tabindex') !== '-1' &&
      window.getComputedStyle(el).display !== 'none' &&
      !!el.offsetParent, // no parents have display: none
    )
  }
  
  function resetFocus() {
    const documentActiveElement = document.activeElement as HTMLElement | null

    if (documentActiveElement) {
      documentActiveElement.blur()
    }
  }
  
  const moveFocusToFirstElement = useCallback(() => {
    const firstOption = document.querySelector<HTMLButtonElement>(menuItemSelector)

    if (firstOption) {
      firstOption.setAttribute('tabindex', '0')
      firstOption.focus()
    }
  }, [menuItemSelector])
  
  const disableFocusOnCurrentElement = useCallback(() => {
    const currentFocusedItem = document.querySelector<HTMLButtonElement>(`${menuItemSelector}[tabindex="0"]`)

    if (currentFocusedItem) {
      currentFocusedItem.setAttribute('tabindex', '-1')
    }
  }, [menuItemSelector])
  
  const focusOnElementOutsideMenu = useCallback((target: 'next' | 'previous') => {
    const currentFocusedItem = document.querySelector<HTMLButtonElement>(`${menuItemSelector}[tabindex="0"]`)

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
  }, [menuItemSelector, disableFocusOnCurrentElement, setOpen])
  
  const focusOnActivator = useCallback(() => {
    const activatorElement = document.querySelector<HTMLButtonElement>(activatorSelector)

    activatorElement?.focus()
  }, [activatorSelector])


  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // https://www.w3.org/WAI/ARIA/apg/patterns/menubar/
    // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role#keyboard_interactions

    event.preventDefault()

    const allOptions = Array.from(document.querySelectorAll<HTMLButtonElement>(menuItemSelector))

    const focusedIndex = allOptions.findIndex(li => li.getAttribute('tabindex') === '0')

    function moveFocusToIndex(newIndex: number) {
      allOptions[newIndex].setAttribute('tabindex', '0')

      if (focusedIndex !== newIndex) {
        allOptions[focusedIndex].setAttribute('tabindex', '-1')
      }

      allOptions[newIndex].focus()
    }

    if (interactionOptions.arrowInteraction) {
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
    }

    if (event.key === 'Escape') {
      disableFocusOnCurrentElement()
      focusOnActivator()

      setOpen(false)

      return
    }

    if (event.key === 'Tab') {
      if (interactionOptions.onTabPress === 'close_menu') {
        focusOnElementOutsideMenu(event.shiftKey ? 'previous' : 'next')
        return
      }

      if (interactionOptions.onTabPress === 'select_next_item') {
        if (event.shiftKey) {
          if (focusedIndex - 1 < 0) {
            focusOnElementOutsideMenu('previous')
            return
          } else {
            moveFocusToIndex(focusedIndex - 1)
            return
          }
        } else {
          if (focusedIndex + 1 >= allOptions.length) {
            focusOnElementOutsideMenu('next')
            return
          } else {
            moveFocusToIndex(focusedIndex + 1)
            return
          }
        }
      }
    }

    if (interactionOptions.homeEndInteraction) {
      if (event.key === 'Home') {
        moveFocusToIndex(0)

        return
      }

      if (event.key === 'End') {
        moveFocusToIndex(allOptions.length - 1)

        return
      }
    }

    if (event.key === 'Enter') {
      allOptions[focusedIndex].click()
    }
  }, [menuItemSelector, interactionOptions.arrowInteraction, interactionOptions.homeEndInteraction, interactionOptions.onTabPress, disableFocusOnCurrentElement, focusOnActivator, setOpen, focusOnElementOutsideMenu])


  function handleOptionClick(...rest: SelectOptionParams[]) {
    disableFocusOnCurrentElement()

    resetFocus()
    
    setOpen(false)

    handleSelectOption?.(...rest)
  }

  function handleMenuBlur(event: React.FocusEvent<HTMLElement>) {
    const menuIncludesFocusedItem = event.currentTarget.contains(event.relatedTarget)
    const activatorIsTheFocusedItem = event.relatedTarget === document.querySelector(activatorSelector)

    if (!menuIncludesFocusedItem && !activatorIsTheFocusedItem && open) {
      disableFocusOnCurrentElement()
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      moveFocusToFirstElement()

      window.addEventListener('keydown', handleKeyDown)
    } else {
      window.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, open, moveFocusToFirstElement])

  return {
    handleOptionClick,
    handleMenuBlur,
  }
}