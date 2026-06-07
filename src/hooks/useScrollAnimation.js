import { useInView } from 'react-intersection-observer'

export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const [ref, inView] = useInView({ threshold, triggerOnce })
  return { ref, inView }
}

export function useScrollAnimationMultiple(count, threshold = 0.1) {
  const results = []
  for (let i = 0; i < count; i++) {
    const [ref, inView] = useInView({ threshold, triggerOnce: true })
    results.push({ ref, inView })
  }
  return results
}
