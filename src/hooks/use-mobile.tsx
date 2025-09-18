import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Enhanced mobile detection with error handling
    try {
      // Check if window is available (SSR compatibility)
      if (typeof window === 'undefined') {
        return
      }

      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      
      const onChange = () => {
        try {
          const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT
          setIsMobile(newIsMobile)
          console.log('Mobile state changed:', newIsMobile)
        } catch (error) {
          console.error('Error in mobile detection onChange:', error)
          // Fallback to previous state or default
          setIsMobile(false)
        }
      }

      // Add event listener with error handling
      try {
        mql.addEventListener("change", onChange)
      } catch (error) {
        console.error('Error adding mobile detection listener:', error)
        // Fallback for older browsers
        if (mql.addListener) {
          mql.addListener(onChange)
        }
      }

      // Set initial state
      try {
        const initialIsMobile = window.innerWidth < MOBILE_BREAKPOINT
        setIsMobile(initialIsMobile)
        console.log('Initial mobile state:', initialIsMobile)
      } catch (error) {
        console.error('Error setting initial mobile state:', error)
        setIsMobile(false)
      }

      // Cleanup function with error handling
      return () => {
        try {
          mql.removeEventListener("change", onChange)
        } catch (error) {
          console.error('Error removing mobile detection listener:', error)
          // Fallback for older browsers
          if (mql.removeListener) {
            mql.removeListener(onChange)
          }
        }
      }
    } catch (error) {
      console.error('Error in useIsMobile hook:', error)
      setIsMobile(false)
    }
  }, [])

  // Enhanced return with better type safety and fallback
  return React.useMemo(() => {
    if (isMobile === undefined) {
      // Fallback detection if state is still undefined
      try {
        if (typeof window !== 'undefined') {
          return window.innerWidth < MOBILE_BREAKPOINT
        }
      } catch (error) {
        console.error('Error in fallback mobile detection:', error)
      }
      return false
    }
    return !!isMobile
  }, [isMobile])
}