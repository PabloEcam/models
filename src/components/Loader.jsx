import { useProgress, Html } from '@react-three/drei'

function Loader() {
  const { progress } = useProgress();

  const formattedProgress = progress.toFixed(2);

  return <Html as='div' className='loader' center>{formattedProgress}%</Html>
}

export default Loader