import { useEffect, useState } from "react"

const useModal = modalRef => {
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

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        toggleIsOpen()
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, modalRef])

  return {
    isOpen,
    closeOnEscapeKey,
    toggleIsOpen,
  }
}

export default useModal
