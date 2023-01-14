export const isBrowser = () => typeof window !== "undefined"

export const addDebouncedEventListener = (
  element,
  event,
  callback,
  delay = 100
) => {
  let timeout

  const debouncedCallback = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(), delay)
  }
  element.addEventListener(event, debouncedCallback)
  return () => element.removeEventListener(event, debouncedCallback)
}

export const vwToPx = (vw) => {
  if (isBrowser()) {
    const px = vw * (window.innerWidth / 100)
    return px
  }
  return 0
}

export const vhToPx = (vh) => {
  if (isBrowser()) {
    const px = vh * (window.innerHeight / 100)
    return px
  }
  return 0
}

export const sleep = (ms) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

export function pathnameMatches(pathA, pathB) {
  return pathA === pathB || pathA === `${pathB}/`
}

// input in the form of rgb(255, 255, 255)
// determine if the color is light or dark
export const isColorLight = (color) => {
  const rgb = color.match(/\d+/g)
  if (!rgb) return false
  const r = parseInt(rgb[0], 10)
  const g = parseInt(rgb[1], 10)
  const b = parseInt(rgb[2], 10)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 125
}