import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import Loader from './components/Loader.jsx'
import Lights from './components/Lights.jsx'
import Model1 from './components/models/JarronBlender.jsx'
import Model2 from './components/models/MesaBlender.jsx'
import Model3 from './components/models/DioramaBlenderTextures.jsx'
import Model4 from './components/models/Room-03.jsx'


function App() {


  const { model } = useControls({
    model: { value: 'Room3', options: ['Jarron', 'Mesa', 'Room', 'Room3'] },
  });

  const models = {
    Jarron: <Model1 />,
    Mesa: <Model2 />,
    Room: <Model3 />,
    Room3: <Model4 />,
  };

  const selectedModel = models[model] || null;



  return (
      <Canvas >
        <Lights />
        <Perf position="top-left" />
        <OrbitControls makeDefault/> 
        <Suspense fallback={<Loader />}>
          {/* <Stage intensity={5} environment="forest" shadows="contact"> */}
            {selectedModel}   
          {/* </Stage> */}
        </Suspense>
    </Canvas>
  ) 
}

export default App
