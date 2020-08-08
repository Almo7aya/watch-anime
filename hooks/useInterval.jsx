import { useRef, useEffect } from 'react'

export default function useInterval(callback, delay) {
  const savedCallback = useRef(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current()
    }

    if (delay) {
      const id = setInterval(() => {
        tick()
      }, delay)
      return () => {
        clearInterval(id)
      }
    }
  }, [delay])
}
