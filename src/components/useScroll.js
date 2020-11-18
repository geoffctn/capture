import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const useScroll = () => {
  const controls = useAnimation()
  const [element, view] = useInView({ threshold: 0.3 })
  if (view) {
    controls.start('show')
  } else {
    controls.start('hidden')
  }
  return [element, controls]
}

export default useScroll
