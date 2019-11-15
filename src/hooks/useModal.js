import { useState } from "react"

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeOnEscapeKey = (event, resetFocusTargetRef) => {
    if (event.key === "Escape") {
      event.stopPropagation()
      setIsOpen(false)
      if (resetFocusTargetRef) {
        resetFocusTargetRef.current.focus()
      }
    }
  }

  const toggleIsOpen = (resetFocusTargetRef, willBeOpen = !isOpen) => {
    setIsOpen(willBeOpen)
    if (resetFocusTargetRef) {
      resetFocusTargetRef.current.focus()
    }
  }

  return {
    isOpen,
    closeOnEscapeKey,
    toggleIsOpen,
  }
}

export default useModal
