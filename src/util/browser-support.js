export const supportsFocusWithin = () => {
  try {
    document.querySelector(":focus-within")
    return true
  } catch (error) {
    return false
  }
}
