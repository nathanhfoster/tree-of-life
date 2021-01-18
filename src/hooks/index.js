import { useEffect, useState } from "react"

export const useMediaQuery = (query = "(min-width: 500px)") => {
  const mediaMatch = window.matchMedia(query)
  const [matches, setMatches] = useState(mediaMatch.matches)

  useEffect(() => {
    const handler = (e) => setMatches(e.matches)
    mediaMatch.addListener(handler)
    return () => mediaMatch.removeListener(handler)
  })
  return matches
}

export const useBootstrapMediaQueries = () => {
  const isExtraExtraLarge = useMediaQuery("(min-width: 1400px)")
  const isExtraLarge = useMediaQuery("(min-width: 1200px)")
  const isLarge = useMediaQuery("(min-width: 992px)")
  const isMedium = useMediaQuery("(min-width: 768px)")
  const isSmall = useMediaQuery("(min-width: 576px)")
  const isExtraSmall = useMediaQuery("(max-width: 575px)")

  return {
    xxl: isExtraExtraLarge,
    xl: isExtraLarge,
    lg: isLarge,
    md: isMedium,
    sm: isSmall,
    xsm: isExtraSmall,
  }
}
