import { useRef } from 'react'
import useInterval from './useInterval'
import useWindowSize from './useWindowSize'

const getElementSizes = (element) => {
  const parentRect = (element).getBoundingClientRect()
  const { top, bottom, left, right } = parentRect
  return { top, bottom, left, right }
}

const isElementInView = (element, windowHeight, windowWidth) => {
  if (element) {
    const { left, right, top, bottom } = getElementSizes(element)
    if (left > windowWidth) {
      return false
    } else if (right < 0) {
      return false
    } else if (top > windowHeight) {
      return false
    } else if (bottom < 0) {
      return false
    }
  }

  return true
}

export default function useInfiniteScroll({
  hasNextPage,
  onLoadMore,
  loading,
  delay = 700
}) {
  const ref = useRef(null)
  const { height: windowHeight, width: windowWidth } = useWindowSize()

  const checkIfLastElementIsVisible = () => {
    const lastElement = ref.current.lastChild
    const isInView = isElementInView(lastElement, windowHeight, windowWidth)
    if (isInView && !loading) {
      onLoadMore()
    }
  }

  useInterval(
    () => {
      checkIfLastElementIsVisible()
    },
    hasNextPage ? delay : 0
  )
  return ref
}
