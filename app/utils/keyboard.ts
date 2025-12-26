// https://zellwk.com/blog/keyboard-focusable-elements/ (improved version)
export function getKeyboardFocusableElements(element = document) {
  return [
    ...element.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
    ),
  ].filter(
    el => !el.hasAttribute('disabled') &&
    !el.getAttribute('aria-hidden') &&
    el.getAttribute('tabindex') !== '-1' &&
    window.getComputedStyle(el).display !== 'none',
  )
}