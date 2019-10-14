export const capitalizeAllWords = text =>
  text === null || text === undefined
    ? text
    : text
        .toString()
        .split(" ")
        .reduce((sentence, word) => {
          const capitalizedWord = Array.from(word).reduce(
            (newText, character, index) => {
              if (index === 0) {
                return newText + character.toUpperCase()
              } else {
                return newText + character.toLowerCase()
              }
            },
            ""
          )
          return [...sentence, capitalizedWord]
        }, [])
        .join(" ")
