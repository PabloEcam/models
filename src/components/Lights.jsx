import { useRef } from 'react';
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three';

export default function Lights () {
    const directionalLightRef = useRef();

    useHelper(directionalLightRef, DirectionalLightHelper, 'red');

    return( <>     
          <directionalLight
            ref={directionalLightRef}
            intensity={1}
            position={[1, 5, 3]} 
            castShadow 
          />

        </>
    )
}