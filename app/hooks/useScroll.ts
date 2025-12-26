import { useEffect } from 'react'

import { debounce } from '../utils'

interface UseScrollProps {
  onScroll: () => void
  debounceTime: number
}

export function useScroll(props: UseScrollProps) {
  const debouncedCheckScroll = debounce(props.onScroll, props.debounceTime)

  useEffect(() => {
    window.addEventListener('scroll', debouncedCheckScroll)

    return () => {
      window.removeEventListener('scroll', debouncedCheckScroll)
    }
  }, [debouncedCheckScroll, props])
}