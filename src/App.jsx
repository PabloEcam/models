import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import Model1 from './components/models/JarronBlender.jsx'
import Model2 from './components/models/MesaBlender.jsx'
import Model3 from './components/models/DioramaBlenderTextures.jsx'

function App() {
  const { model, count } = useControls({
    model: { value: 'Jarron', options: ['Jarron', 'Mesa', 'Room'] },
    count: { value: 50, min: 1, max: 1000, step: 1 },
  });

  const models = {
    Jarron: <Model1 />,
    Mesa: <Model2 />,
    Room: <Model3 />,
  }; 

  // Función para generar una posición en una cuadrícula con separación de 10 en x y z
  const getPosition = (index) => {
    const separation = 25;
    const perRow = Math.ceil(Math.sqrt(count));
    const x = (index % perRow) * separation;
    const z = Math.floor(index / perRow) * separation;
    return [x, 0, z];
  };

  return (
    <Canvas>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <Stage intensity={5}>
        {model === 'Room' &&
          Array.from({ length: count }).map((_, index) => (
            <Model3 key={index} position={getPosition(index)} />
          ))}

        {model === 'Jarron' &&
          Array.from({ length: count }).map((_, index) => (
            <Model1 key={index} position={getPosition(index)} />
          ))}

        {model === 'Mesa' &&
          Array.from({ length: count }).map((_, index) => (
            <Model2 key={index} position={getPosition(index)} />
          ))}
      </Stage>
    </Canvas>
  );
}

export default App;
