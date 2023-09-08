import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls} from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import Model1 from './components/models/JarronBlender.jsx'
import Model2 from './components/models/MesaBlender.jsx'
import Model3 from './components/models/DioramaBlenderTextures.jsx'

function App() {
  const { model } = useControls({
    model: { value: 'Jarron', options: ['Jarron', 'Mesa', 'Room'] },
  });

  const models = {
    Jarron: <Model1 />,
    Mesa: <Model2 />,
    Room: <Model3 />,
  };


  
  const selectedModel = models[model] || null;

  return (
      <Canvas >
        <Perf position="top-left" />
       <OrbitControls makeDefault/> 
        <Stage intensity={5} >
         {selectedModel} 
        </Stage>
    </Canvas>
  ) 
}

export default App
